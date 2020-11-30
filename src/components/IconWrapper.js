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
    span {
      opacity: 1;
      bottom: 16px;
    }
  }
  &:focus, &:active {
    outline: none;
    box-shadow: 0 0 0 2px #1B1C32;
    background: white;
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
  const camelToDash = str => str
    .replace(/([A-Z])/g, ' $1').trim();
  ;

  const handleClick = (i) => {
    const svg = document.getElementById(`${i}`);
    const s = new XMLSerializer();
    const str = s.serializeToString(svg);
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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
      <span>{camelToDash(icon)}</span>
    </IconWrapper>
  )
}
