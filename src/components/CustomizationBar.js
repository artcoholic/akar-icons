import React, { useState, useEffect } from 'react';
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
  border-radius: 8px;
  padding: ${({ isStuck }) => isStuck ? '16px' : '4px 0 12px 0'};
  box-sizing: border-box;
  transition: box-shadow 300ms ease-out, padding 150ms ease-out;
  box-shadow: ${({ isStuck }) => isStuck ? 'rgb(45 59 66 / 0.15) 0px 6px 12px 0px' : 'none'};
  border: ${({ isStuck }) => isStuck ? '.5px solid #e6eaef' : 'none'};
  z-index: 99;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    top: 24px;
    padding: ${({ isStuck }) => isStuck ? '16px' : '16px 0'};
  }
`

const ResetButton = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 12px;
  display: none;
  transition: all 150ms ease-out;
  border-radius: 50%;
  right: ${({ isStuck }) => isStuck ? '-12px' : '0'};
  top: ${({ isStuck }) => isStuck ? '-12px' : '0'};
  background: ${({ isStuck }) => isStuck ? 'red' : 'none'};
  padding: ${({ isStuck }) => isStuck ? '4px' : '0'};
  color: ${({ isStuck }) => isStuck ? 'white' : 'red'};
  @media (min-width: 768px) {
    display: block;
  }
`

export default ({ stroke, setStroke, size, setSize, query, updateQuery, icons, height }) => {
  const [isStuck, setIsStuck] = useState(false);
  const [reset, setReset] = useState(false);

  useScrollPosition(({ currPos }) => {
    const isStuck = currPos.y < -height;
    isStuck ? setIsStuck(true) : setIsStuck(false);
  })

  useEffect(() => {
    (query !== '' || stroke !== 2 || size !== 24) ? setReset(true) : setReset(false);
  }, [stroke, query, size]);

  function handleReset() {
    setStroke(2);
    setSize(24);
    updateQuery('');
  }
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
        {reset &&
          <ResetButton reset={reset} isStuck={isStuck} type="button" onClick={handleReset}>
            <icons.ArrowCounterClockwise size={16} />
          </ResetButton>
        }
      </Container>
    </>
  )
}