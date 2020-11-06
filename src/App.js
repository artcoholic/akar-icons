import React, { useState } from 'react';
import styled from 'styled-components';
import * as icons from './icons';
import Header from './components/Header';
import IconWrapper from './components/IconWrapper';
import AlertBox from './components/AlertBox';
import Footer from './components/Footer';
import CustomizationBar from './components/CustomizationBar';

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
const IconLabel = styled.span`
  font-size: .75em;
  text-align: center;
`
const NoResults = styled.span`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4em 0;
  code {
    background: black;
    color: white;
    padding: 0.2em 0.4em;
    border-radius: 2px;
    margin-left: 2px;
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

const App = () => {

  const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)
    ;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [query, updateQuery] = useState('');
  const [stroke, setStroke] = useState(2);
  const [size, setSize] = useState(24);


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
      <Header query={query} updateQuery={updateQuery} icons={icons} />
      <Container>
        <CustomizationBar query={query} updateQuery={updateQuery} icons={icons} stroke={stroke} setStroke={setStroke} size={size} setSize={setSize} />
        {
          searchResults.length > 0 ?
            searchResults.map((key, index) => {
              const Icon = icons[key];
              return (
                <IconWrapper key={index} icon={key} setOpen={setOpen} setName={setName}>
                  <IconContainer>
                    <Icon strokeWidth={stroke} size={size} />
                  </IconContainer>
                  {/* <IconLabel>{camelToDash(key)}</IconLabel> */}
                </IconWrapper>
              )
            }) :
            <NoResults>There are no icons for <code>{query}</code></NoResults>
        }
      </Container>
      {open && <AlertBox setOpen={setOpen} name={name} icons={icons} />}
      <Footer numberOfIcons={Object.keys(icons).length} />
    </>
  )
}

export default App;