import React from 'react';
import styled from 'styled-components';
import { Search } from '../icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  color: rgba(0,0,0,0.5);
  margin-left:12px;
  padding: 0px 12px;
  border-left: 2px solid #e2e2e2;
  svg {
    width: 14px;
    height: 14px;
  }
  @media (min-width: 768px) {
    margin-left:24px;
    padding: 2px 24px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const SearchInput = styled.input`
  border: none; 
  border-radius: 4px;
  margin-left: 4px;
  padding: 0;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  &::placeholder  {
    color:rgba(0,0,0,0.5);
  }
  @media (min-width: 768px) {
    font-size: 18px;
    margin-left: 8px;
  }

`

export default ({ query, updateQuery, icons }) => {
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
  }
  return (
    <Container>
      <icons.Search />
      <SearchInput type="text" autocomplete="off" value={query} onChange={onSearch} placeholder="Search" />
    </Container>
  )
}