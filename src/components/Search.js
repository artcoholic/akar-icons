import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  color: #1B1C32;
  order: -1;
  flex-grow: 1;
  flex-basis: 0;
  @media (min-width: 768px) {
    flex-basis: 100%;
    margin-right: 12px;
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
  svg {
    display: block;
  }
`

const ForwardSlash = styled.span`
  position: absolute;
  right: 14px;
  border: 1px solid #DAE4E8;
  padding: 2px 8px 4px;
  color: #DAE4E8;
  border-radius: 4px;
  font-weight: 300;
  background-color: white;
  visibility: hidden;
  @media (min-width: 768px) {
    visibility: visible;
  }
`

export default ({ query, updateQuery, icons }) => {
  const [focus, setFocus] = React.useState(false);
  const searchInput = React.useRef(null);

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
    gtag('event', 'search', {
      search_term: `${currentTarget.value}`
    });
  };

  function autoFocus(e) {
    if (e.keyCode === 191 && e.shiftKey === false) {
      searchInput.current.focus();
      e.preventDefault();
    }
  }

  document.addEventListener('keydown', autoFocus);

  return (
    <Container>
      <SearchIcon><icons.Search size={20} /></SearchIcon>
      <SearchInput
        ref={searchInput}
        type="text"
        autocomplete="off"
        value={query}
        onChange={onSearch}
        placeholder={`Search ${Object.keys(icons).length} icons`}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {query && <ClearButton onClick={() => updateQuery('')}><icons.Cross size={14} strokeWidth={3} /></ClearButton>}
      {!query && !focus && <ForwardSlash>/</ForwardSlash>}
    </Container>
  )
}