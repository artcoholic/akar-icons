import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  color: ${props => props.theme.colors.content.primary};
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
  background: ${props => props.theme.colors.bg.tertiary};
  line-height:1.5;
  -webkit-appearance: none;
  color: ${props => props.theme.colors.content.primary};
  transition: ${props => props.theme.transition};
  &:focus, &:active {
   outline: none;
   box-shadow: 0 0 0 2px ${props => props.theme.colors.content.primary};
   background: ${props => props.theme.colors.bg.primary};
  }
  &::placeholder  {
    color: ${props => props.theme.colors.content.primary};
    transition: ${props => props.theme.transition};
    opacity: 0.5;
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 0px;
  transform: translateX(0);
  padding: 14px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.content.primary};
  border-radius: 4px;
  svg {
    display: block;
    position: relative;
    left: 0;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0px;
  padding: 0 14px;
  box-sizing: border-box;
  transition: ${props => props.theme.transition};
  svg {
    display: block;
  }
`

const ForwardSlash = styled.span`
  position: absolute;
  right: 14px;
  border: 1px solid ${props => props.theme.colors.content.tertiary};
  padding: 2px 8px 4px;
  color: ${props => props.theme.colors.content.tertiary};
  border-radius: 4px;
  font-weight: 300;
  background-color: ${props => props.theme.colors.bg.primary};
  visibility: hidden;
  box-shadow: rgba(15,23,32,0.1) 0px 2px 4px 0px;
  transition: ${props => props.theme.transition};
  @media (min-width: 768px) {
    visibility: visible;
  }
`

export default ({ query, updateQuery, icons }) => {
  const [focus, setFocus] = React.useState(false);
  const searchInput = React.useRef(null);

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
  };

  function onClear() {
    searchInput.current.focus();
    updateQuery('');
  }

  function autoFocus(e) {
    if (e.key === '/') {
      searchInput.current.focus();
      e.preventDefault();
    }
  }

  function autoClear(e) {
    if (e.key === 'Escape') {
      updateQuery('');
    }
  }

  document.addEventListener('keydown', autoFocus);
  document.addEventListener('keydown', autoClear);

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
        aria-label="Search"
      />
      {query && (
        <ClearButton aria-label="Clear search" onClick={onClear}>
          <icons.Cross size={14} strokeWidth={3} />
        </ClearButton>
      )}
      {!query && !focus && <ForwardSlash>/</ForwardSlash>}
    </Container>
  )
}