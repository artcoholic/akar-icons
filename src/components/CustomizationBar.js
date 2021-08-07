import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Search from './Search';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Container = styled.form`
  grid-column: 1 / -1;
  margin: 0;
  position: sticky;
  top: 16px;
  background: ${props => props.theme.colors.bg.primary};
  border-radius: 8px;
  padding: ${({ isStuck }) => isStuck ? '16px' : '8px 0 16px 0'};
  box-sizing: border-box;
  box-shadow: ${({ isStuck }) => isStuck ? 'rgba(15,23,32,0.1) 0px 6px 12px 0px' : 'none'};
  border: ${({ isStuck }) => isStuck ? '.5px solid' : 'none'};
  border-color: ${props => props.theme.colors.content.tertiary};
  z-index: 99;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  transition: padding 150ms ease-out;
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
  border: none;
  font-size: 12px;
  border-radius: 4px;
  background: ${({ disabled }) => disabled ? '#F2F2F2' : '#FFD542'};
  color: ${({ disabled }) => disabled ? '#BDBDBD' : '#082D41'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  order: -1;
  padding: 0 16px;
  margin-left: 8px;
  &:enabled:hover {
    background-color: #e8c031;
  }
  @media (min-width: 768px) {
    order: 0;
    margin-left: 12px;
  }
`

export default ({ stroke, setStroke, size, setSize, query, updateQuery, icons, height }) => {
  const [isStuck, setIsStuck] = useState(false);
  const isEnabled = query !== '' || stroke !== 2 || size !== 24;

  useScrollPosition(({ currPos }) => {
    setIsStuck(currPos.y < -height);
  })

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
            type="stroke-width"
          />
          <Slider
            title="Icon size"
            output={size}
            input={setSize}
            min="12"
            max="64"
            step="4"
            mr={[0, 12]}
            type="icon-size"
          />
        </Wrapper>
        <ResetButton disabled={!isEnabled} type="button" onClick={handleReset} aria-label="Reset">
          <icons.ArrowCounterClockwise size={16} />
        </ResetButton>
      </Container>
    </>
  )
}