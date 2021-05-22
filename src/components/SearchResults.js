import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import tinykeys from 'tinykeys';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  justify-items: stretch;
  align-items: stretch;
  list-style: none;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
  }
  @media (min-width: 1152px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (min-width: 2560px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const getColumns = parentEl => {
  if (!parentEl) {
    return;
  }

  const { gridTemplateColumns } = window.getComputedStyle(parentEl);

  return gridTemplateColumns.split(' ').length;
};

const moveFocus = (parentEl, nextPosition) => {
  if (!parentEl || !nextPosition) {
    return;
  }

  const activeEl = document.activeElement;
  const buttons = Array.from(parentEl.querySelectorAll('button'));

  buttons.some((btn, i) => {
    const newNodeKey = i + nextPosition;

    if (btn !== activeEl) {
      return false;
    }

    if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
      buttons[newNodeKey].focus();
      return true;
    }

    buttons[0].focus();

    return true;
  });
};

export default props => {
  const ref = useRef();

  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      ArrowDown: () => moveFocus(ref.current, getColumns(ref.current)),
      ArrowLeft: () => moveFocus(ref.current, -1),
      ArrowRight: () => moveFocus(ref.current, 1),
      ArrowUp: () => moveFocus(ref.current, getColumns(ref.current) * -1)
    });

    return () => unsubscribe();
  }, []);

  return <Container {...props} ref={ref} />;
};
