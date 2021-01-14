import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as icons from './icons';
import Header from './components/Header';
import IconWrapper from './components/IconWrapper';
import AlertBox from './components/AlertBox';
import Footer from './components/Footer';
import CustomizationBar from './components/CustomizationBar';
import theme from './theme';

import upperCamelCase from 'uppercamelcase';
import Fuse from 'fuse.js';
import data from './data.json';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 16px;
  list-style: none;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    padding: 12px 24px 24px;
  }
  @media (min-width: 1152px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (min-width: 2560px) {
    grid-template-columns: repeat(12, 1fr);
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
  margin-top: 1.5em;
  padding: 8px 12px;
  border-radius: 4px;
  &:hover {
    background: #C9D5D9;
  }
  svg {
    margin-right: 8px;
  }
`

const App = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [query, updateQuery] = useState('');
  const [stroke, setStroke] = useState(2);
  const [size, setSize] = useState(24);
  const [height, setHeight] = useState(0);

  const DATA = [];
  for (var i in data) {
    DATA.push([i, data[i]])
  };

  DATA.forEach((data) => {
    data.splice(0, 1);
  });

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

  const results = fuse.search(query);
  const searchResults = query ? results.map(search => upperCamelCase(search.item.name)) : Object.keys(icons);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header
          query={query}
          updateQuery={updateQuery}
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
            setSize={setSize} />
          {
            searchResults.length > 0 ?
              searchResults.map((key, index) => {
                const Icon = icons[key];
                return (
                  <IconWrapper key={index} icon={key} setOpen={setOpen} setName={setName}>
                    <IconContainer>
                      <Icon strokeWidth={stroke} size={size} />
                    </IconContainer>
                  </IconWrapper>
                )
              }) :
              <NoResults>
                <span>There are no icons for <code>{query}</code></span>
                <SecondaryLinks href="https://github.com/artcoholic/akar-icons/issues" target="_blank"><icons.File size={16} />Request an icon</SecondaryLinks>
              </NoResults>
          }
        </Container>
        {open && <AlertBox setOpen={setOpen} name={name} icons={icons} />}
        <Footer numberOfIcons={Object.keys(icons).length} />
      </ThemeProvider>
    </>
  )
}

export default App;