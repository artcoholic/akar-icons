import React from 'react';
import PropTypes from 'prop-types';

const ArrowCounterClockwise = props => {
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
      <path d="M4.001 16.06A9 9 0 105.294 6.035"></path>
      <path d="M8.033 7.39l-4 .5-.5-4"></path>
    </svg>
  );
};

ArrowCounterClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowCounterClockwise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowCounterClockwise;
