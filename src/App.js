import React, { useState } from 'react';
import styled from 'styled-components';
import * as icons from './icons';
import Header from './components/Header';
import IconWrapper from './components/IconWrapper';
import AlertBox from './components/AlertBox';
import Footer from './components/Footer';

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
    padding: 24px;
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

const App = () => {

  const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)
    ;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [query, updateQuery] = useState('');

  // const DATA = [];
  // for (var i in data) {
  //   DATA.push([i, data[i]])
  // };

  // DATA.forEach((data) => {
  //   data.splice(0, 1);
  // });

  const fuse = new Fuse(Object.keys(icons), {
    keys: [
      'name',
      'description',
    ],
    includeScore: true,
    threshold: 0.2,
  });

  const results = fuse.search(query);
  const searchResults = query ? results.map(search => search.item) : Object.keys(icons);

  return (
    <>
      <Header query={query} updateQuery={updateQuery} icons={icons} />
      <Container>
        {
          searchResults
            .map((key, index) => {
              const Icon = icons[key];
              return (
                <IconWrapper key={index} icon={key} setOpen={setOpen} setName={setName}>
                  <Icon />
                  <IconLabel>{camelToDash(key)}</IconLabel>
                </IconWrapper>
              )
            })
        }
      </Container>
      {open && <AlertBox setOpen={setOpen} name={name} icons={icons} />}
      <Footer numberOfIcons={Object.keys(icons).length} />
    </>
  )
}

export default App;