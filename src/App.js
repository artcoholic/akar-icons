import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as icons from './icons';
import Header from './components/Header';
import IconWrapper from './components/IconWrapper';
import AlertBox from './components/AlertBox';
import Footer from './components/Footer';
import CustomizationBar from './components/CustomizationBar';
import SearchResults from './components/SearchResults';
import theme from './theme';

import upperCamelCase from 'uppercamelcase';
import Fuse from 'fuse.js';
import data from './data.json';

const Container = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0;
  padding: 16px;
  @media (min-width: 768px) {
    grid-gap: 12px;
    padding: 12px 24px 24px;
  }
`

const NoResults = styled.span`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4em 0;
  color: #1B1C32;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  code {
    margin-left: 2px;
    border-bottom: 1px dotted #1B1C32;
  }
`

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`

const SecondaryLinks = styled.a`
  transition: background 150ms ease-out;
  display: flex;
  align-items: center;
  background: #f5f7f9;
  color: #1B1C32;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  &:hover {
    background: #C9D5D9;
  }
  svg {
    margin-right: 4px;
  }
`

const ProductHuntBadge = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display:flex;
  z-index: 999;
`

const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: none;
  background: white;
  position: absolute;
  top: -12px;
  left: -12px;
  cursor: pointer;
  transition: box-shadow 300ms ease-out;
  &:hover {
    box-shadow: rgb(45 59 66 / 0.3) 0px 6px 12px 0px;
  }
  svg {
    display: block;
  }
`

const DATA = Object.values(data).map(x => [x])
const ICON_KEYS = Object.keys(icons)

const fuse = new Fuse(DATA.flat(), {
  keys: [
    'name',
    {
      name: 'description',
      weight: 0.1,
    },
  ],
  includeScore: true,
  threshold: 0.2,
})

const App = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [query, updateQuery] = useState('');
  const [stroke, setStroke] = useState(2);
  const [size, setSize] = useState(24);
  const [height, setHeight] = useState(0);
  const [badge, setBadge] = useState(true);

  const fuseResults = fuse.search(query);
  const results = query ? fuseResults.map(search => upperCamelCase(search.item.name)) : ICON_KEYS;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header
          icons={icons}
          setHeight={setHeight}
        />
        <Container>
          <CustomizationBar
            height={height}
            query={query}
            updateQuery={updateQuery}
            icons={icons}
            stroke={stroke}
            setStroke={setStroke}
            size={size}
            setSize={setSize}
          />
          <SearchResults>
            {results.length === 0 && (
              <NoResults>
                <span style={{ fontSize: "6em", color: "#DAE4E8" }}>( · _ · )</span>
                <span style={{ margin: "2em 0 1em 0" }}>There are no icons for <code>{query}</code></span>
                <SecondaryLinks href="https://github.com/artcoholic/akar-icons/issues" target="_blank"><icons.File size={14} />Request an icon</SecondaryLinks>
              </NoResults>
            )}
            {results.map((key, index) => {
              const Icon = icons[key];

              return (
                <IconWrapper key={index} icon={key} setOpen={setOpen} setName={setName}>
                  <IconContainer>
                    <Icon strokeWidth={stroke} size={size} />
                  </IconContainer>
                </IconWrapper>
              )
            })}
          </SearchResults>
        </Container>
        {open && <AlertBox open={open} setOpen={setOpen} name={name} icons={icons} />}
        <Footer icons={icons} />
        {badge &&
          <ProductHuntBadge>
            <CloseButton onClick={() => setBadge(false)} type="button" aria-label="Close Badge">
              <icons.CircleX color="#EA532A" />
            </CloseButton>
            <a href="https://www.producthunt.com/posts/akar-icons?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-akar-icons" target="_blank">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=282614&theme=light" alt="Akar Icons - Perfectly rounded icon library for your projects. | Product Hunt" style={{ width: 250, height: 54 }} />
            </a>
          </ProductHuntBadge>
        }
      </ThemeProvider>
    </>
  )
}

export default App;