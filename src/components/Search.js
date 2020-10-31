import React from 'react';
import styled from 'styled-components';
import { Search } from '../icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  flex-basis: 100%;
  color: rgba(0,0,0,0.5);
  position: relative;
  order: 1;
  margin-top: 12px;
  svg {
    position: absolute;
    left: 14px;
  }
  @media (min-width: 768px) {
    padding: 0 24px;
    order: 0;
    margin-top: 0;
    flex-basis: auto;
    svg {
      position: absolute;
      left: 40px;
    }
  }
`

const SearchInput = styled.input`
  border: none; 
  border-radius: 4px;
  padding: 12px 16px 12px 48px;
  width: 100%;
  background: #f5f7f9;
  &:focus {
   outline: none;
   box-shadow: 0 0 0 2px #41535a;
   background: white;
  }
  &::placeholder  {
    color:rgba(0,0,0,0.25);
  }
`

export default ({ query, updateQuery, icons }) => {
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
  }
  return (
    <Container>
      <icons.Search size={20} />
      <SearchInput type="text" autocomplete="off" value={query} onChange={onSearch} placeholder={`Search ${Object.keys(icons).length} icons`} />
    </Container>
  )
}