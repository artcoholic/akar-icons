import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  
  input[type=range] {
    width: 100%;
    appearance: none;
    margin-top: 8px;
    padding: 8px 0;
    
    &::-webkit-slider-runnable-track {
      height: 2px;
      background: #ddd;
      border: none;
      border-radius: 2px;
      bottom: 0;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      cursor: grab;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: black;
      margin-top: -7px;
    &:active {
      cursor: grabbing;
    }
    }
    &:focus {
      outline: none;
    }
  }
`

export default ({ title, input, output, min, max, step }) => {
  function handleChange(event) {
    input(event.target.value);
  }
  return (
    <Container>
      <label><span>{title}</span><span>{output}px</span></label>
      <input type="range" min={min} max={max} step={step} value={output} onChange={handleChange} />
    </Container>
  )
}