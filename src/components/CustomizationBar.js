import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Search from './Search';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Container = styled.form`
  grid-column: 1 / -1;
  margin: 0;
  position: sticky;
  top: 16px;
  background: white;
  border-radius: 8px;
  padding: ${({ isStuck }) => isStuck ? '16px' : '8px 0 16px 0'};
  box-sizing: border-box;
  transition: box-shadow 300ms ease-out, padding 150ms ease-out;
  box-shadow: ${({ isStuck }) => isStuck ? 'rgb(45 59 66 / 0.15) 0px 6px 12px 0px' : 'none'};
  border: ${({ isStuck }) => isStuck ? '.5px solid #e6eaef' : 'none'};
  z-index: 99;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    top: 24px;
    padding: ${({ isStuck }) => isStuck ? '16px' : '16px 0'};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-basis: 100%;
`

const ResetButton = styled.button`
  cursor: pointer;
  pointer-events: ${({ reset }) => reset ? 'auto' : 'none'};
  border: none;
  outline: none;
  font-size: 12px;
  transition: all 150ms ease-out;
  border-radius: 4px;
  color: ${({ reset }) => reset ? '#1B1C32' : '#BDBDBD'};
  background: ${({ reset }) => reset ? '#FFD542' : '#EFEFEF'};
  order: -1;
  padding: 0 16px;
  margin-left: 8px;
  &:hover {
    background-color: #e8c031;
  }
  @media (min-width: 768px) {
    order: 0;
    margin-left: 12px;
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
    (query !== '' || stroke != 2 || size != 24) ? setReset(true) : setReset(false);
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
        <Wrapper>
          <Slider
            title="Stroke width"
            output={stroke}
            input={setStroke}
            min={0.5}
            max={3}
            step={0.5}
            ml={[0, 12]}
          />
          <Slider
            title="Size"
            output={size}
            input={setSize}
            min="12"
            max="64"
            step="4"
            mr={[0, 12]}
          />
        </Wrapper>
        <ResetButton reset={reset} isStuck={isStuck} type="button" onClick={handleReset}>
          <icons.ArrowCounterClockwise size={16} />
        </ResetButton>
      </Container>
    </>
  )
}