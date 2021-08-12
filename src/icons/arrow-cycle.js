import React from 'react';
import PropTypes from 'prop-types';

const ArrowCycle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16"></path>
      <path d="M2 12C2 6 6.39 2 11.806 2 16.209 2 19.76 4.335 21 8"></path>
      <path d="M7 17l-4-1-1 4"></path>
      <path d="M17 7l4 1 1-4"></path>
    </svg>
  );
};

ArrowCycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowCycle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowCycle;
