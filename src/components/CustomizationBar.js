import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Search from './Search';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Container = styled.form`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px 12px;
  margin: 0;
  position: sticky;
  top: 16px;
  background: white;
  border-radius: 4px;
  padding: ${({ isStuck }) => isStuck ? `16px` : `4px 0 12px 0`};
  box-sizing: border-box;
  transition: box-shadow 300ms ease-out, padding 150ms ease-out;
  box-shadow: ${({ isStuck }) => isStuck ? `rgb(45 59 66 / 0.15) 0px 6px 12px 0px` : `none`};
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    top: 24px;
    padding: ${({ isStuck }) => isStuck ? `16px` : `12px 0`};
  }
`

export default ({ stroke, setStroke, size, setSize, query, updateQuery, icons }) => {
  const [isStuck, setIsStuck] = useState(false);
  useScrollPosition(({ currPos }) => {
    const isStuck = currPos.y < -49;
    if (isStuck) {
      setIsStuck(true)
    } else {
      setIsStuck(false)
    };
  })
  return (
    <>
      <Container isStuck={isStuck}>
        <Search query={query} updateQuery={updateQuery} icons={icons} />
        <Slider
          title="Stroke width"
          output={stroke}
          input={setStroke}
          min="0.5"
          max="4"
          step="0.5"
        />
        <Slider
          title="Size"
          output={size}
          input={setSize}
          min="16"
          max="64"
          step="4"
        />
      </Container>
    </>
  )
}