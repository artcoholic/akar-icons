import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  grid-column: 1 / -1;
  color: #1B1C32;
  @media (min-width: 768px) {
    flex-basis: 200%;
    grid-column: 1 / 3;
  }
`

const SearchInput = styled.input`
  border: none; 
  border-radius: 4px;
  padding: 12px 16px 12px 48px;
  width: 100%;
  background: #f5f7f9;
  line-height:1.5;
  -webkit-appearance: none;
  color: #1B1C32;
  &:focus, &:active {
   outline: none;
   box-shadow: 0 0 0 2px #1B1C32;
   background: white;
  }
  &::placeholder  {
    color:#CDCDD8;
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 0px;
  transform: translateX(0);
  padding: 14px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #1B1C32;
  svg {
    position: relative;
    left: 0;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0px;
  padding: 0 14px;
  box-sizing: border-box;
`

export default ({ query, updateQuery, icons }) => {
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
  }
  return (
    <Container>
      <SearchIcon><icons.Search size={20} /></SearchIcon>
      <SearchInput type="text" autocomplete="off" value={query} onChange={onSearch} placeholder={`Search ${Object.keys(icons).length} icons`} />
      {query && <ClearButton onClick={() => updateQuery('')}><icons.Cross size={14} strokeWidth={3} /></ClearButton>}
    </Container>
  )
}