import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f7f9;
  padding: 24px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  transition: all 150ms ease-out;
  svg{
    margin: 36px 0;
  }
  &:hover {
    background: #dae4e8;
  }
  &:focus {
    outline: black auto 1px;
    background: white;
  }
`

export default ({ children, icon, setOpen, setName }) => {

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
  }
  return (
    <IconWrapper onClick={() => { handleClick(icon); }}>
      {children}
    </IconWrapper>
  )
}
