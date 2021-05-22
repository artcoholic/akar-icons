import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.button`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background: #f5f7f9;
  padding: 24px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  transition: all 150ms ease-out;
  position: relative;
  color: #1B1C32;
  -webkit-appearance: none;
  &:hover {
    background: #dae4e8;
  }
  &:focus, &:hover {
    span {
      opacity: 1;
      bottom: 16px;
    }
  }
  &:focus, &:active {
    background: white;
    outline: none;
    box-shadow: 0 0 0 2px #1B1C32;
  }
  span {
    position: absolute;
    bottom: 0px;
    font-size: 12px;
    opacity: 0;
    transition: all 150ms ease-out;
    padding: 0 24px;
  }
`

export default ({ children, icon, setOpen, setName }) => {
  const addSpace = str => str.replace(/([a-z])([A-Z])/g, '$1 $2');

  const handleClick = (i) => {
    setOpen(true);
    setName(i);
    gtag('event', 'select_content', {
      content_type: `${i}`,
      item_id: `${i}`
    })
  }
  return (
    <IconWrapper onClick={() => { handleClick(icon); }}>
      {children}
      <span>{addSpace(icon)}</span>
    </IconWrapper>
  )
}
