import React, { useEffect } from 'react';
import styled from 'styled-components';

const IconWrapper = styled.button`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.bg.tertiary};
  padding: 24px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.colors.content.primary};
  -webkit-appearance: none;
  &:hover {
    background: ${props => props.theme.colors.bg.secondary};
  }
  &:focus, &:hover {
    span {
      opacity: 1;
      transform: translateY(-16px);
    }
  }
  &:focus, &:active {
    background: ${props => props.theme.colors.bg.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.content.primary};
  }
  span {
    position: absolute;
    bottom: 0px;
    font-size: 12px;
    opacity: 0;
    padding: 0 24px;
  }
`

export default ({ children, icon, setOpen, setName, copiedSVG, setCopiedSVG, addSpace }) => {

  useEffect(() => {
    const timeout = setTimeout(() => { setCopiedSVG(false); }, 3000);
    return () => clearTimeout(timeout);
  }, [copiedSVG]);

  const handleClick = (i) => {
    setOpen(true);
    setName(i);
    const svg = document.getElementById(`${i}`);
    const s = new XMLSerializer();
    const str = s.serializeToString(svg);
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedSVG(true);
  }
  return (
    <IconWrapper onClick={() => { handleClick(icon) }}>
      {children}
      <span>{addSpace(icon)}</span>
    </IconWrapper>
  )
}
