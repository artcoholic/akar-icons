import React from 'react';
import styled from 'styled-components';
import pkg from '../../package.json';
import Search from './Search';

const Header = styled.header`
  display: block;
  padding: 12px 16px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding: 12px 24px;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: 1em;
  white-space: nowrap;
  @media (min-width: 768px) {
   font-size: 2em;
  }
`

const Version = styled.span`
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  padding: .35em .5em;
  font-weight:bolder;
  font-size: .5em;
  @media (min-width: 768px) {
   font-size: 1em;
   border-radius: 4px;
  }
`

export default ({ query, updateQuery, icons }) =>
  <Header>
    <Title>Akar Icons</Title>
    <Search query={query} updateQuery={updateQuery} icons={icons} />
    <Version>v{pkg.version}</Version>
  </Header>

