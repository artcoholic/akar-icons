import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  
  input[type=range] {
    width: 100%;
    appearance: none;
    cursor: pointer;
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
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: black;
      margin-top: -7px;
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