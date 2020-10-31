import React from 'react';
import styled from 'styled-components';
import { Search } from '../icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  color: rgba(0,0,0,0.5);
  margin-left:24px;
  padding: 2px 24px;
  border-left: 2px solid #e2e2e2;
`

const SearchInput = styled.input`
  border: none; 
  border-radius: 4px;
  margin-left: 8px;
  padding: 0;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  &::placeholder  {
    color:rgba(0,0,0,0.5);
  }

`

export default ({ query, updateQuery, icons }) => {
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
  }
  return (
    <Container>
      <icons.Search size={18} />
      <SearchInput type="text" autocomplete="off" value={query} onChange={onSearch} placeholder="Search" />
    </Container>
  )
}