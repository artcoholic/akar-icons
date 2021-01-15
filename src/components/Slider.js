import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-basis: 100%;
  margin: 16px 4px 0 ;
  ${space}
  @media (min-width: 768px) {
    margin: 0 12px;
  }

  label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #1B1C32;
  }
  
  input[type=range] {
    width: 100%;
    appearance: none;
    margin-top: 8px;
    
    &::-webkit-slider-runnable-track {
      height: 16px;
      background: #f5f7f9;
      border: none;
      border-radius: 8px;
      bottom: 0;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      cursor: grab;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #1B1C32;
      margin-top: 0;
      transition: all 150ms ease-out;
    &:active {
      cursor: grabbing;
      transform: scale(1.5);
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    }
    }
    &:focus {
      outline: none;
    }
  }
`

export default ({ title, input, output, min, max, step, mr, ml }) => {
  function handleChange(event) {
    input(event.target.value);
  }
  return (
    <Container mr={mr} ml={ml}>
      <label><span>{title}</span><span>{output}px</span></label>
      <input type="range" min={min} max={max} step={step} value={output} onChange={handleChange} />
    </Container>
  )
}