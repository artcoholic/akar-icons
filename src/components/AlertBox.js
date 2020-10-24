import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  pointer-events: none;
  position: fixed;
  background: black;
  color: white;
  bottom: 24px;
  padding: 12px 16px;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;  
  font-weight: 300;
  display: flex;
  svg {
    margin-right: 8px;
  }
`
const AlertBox = ({ setOpen, name, icons }) => {
  useEffect(() => {
    const timeout = setTimeout(() => { setOpen(false); }, 3000);
    return () => clearTimeout(timeout);
  }, [name]);
  const Icon = icons[name];
  return (
    <Container id="alert">
      <Icon size={16} strokeWidth={1.5} /> Copied to clipboard
    </Container>
  )
}

export default AlertBox;