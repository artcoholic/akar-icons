import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  margin: 16px 4px 0;
  ${space}
  @media (min-width: 768px) {
    margin: 0 12px;
  }

  label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 16px;
  }
  
  input[type=range] {
    width: 100%;
    appearance: none;
    background: transparent;
    
    &::-webkit-slider-runnable-track {
      height: 2px;
      background: ${props => props.theme.colors.bg.secondary};
      border: none;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      cursor: pointer;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: ${props => props.theme.colors.bg.primary};
      border: 1px solid ${props => props.theme.colors.content.primary};
      margin-top: -7px;
      transition: transform 150ms ease-out;
      &:active {
        transform: scale(1.5);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
      }
    }
    &:focus {
      outline: none;
      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 4px deepskyblue;
      }
    }
  }
`

export default ({ title, input, output, min, max, step, mr, ml, type }) => {
  function handleChange(event) {
    input(event.target.value);
  }
  return (
    <Container mr={mr} ml={ml}>
      <label for={type}><span>{title}</span><span>{output}px</span></label>
      <input id={type} type="range" min={min} max={max} step={step} value={output} onChange={handleChange} />
    </Container>
  )
}