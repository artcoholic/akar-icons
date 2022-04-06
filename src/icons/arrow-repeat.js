import React from 'react';
import PropTypes from 'prop-types';

const ArrowRepeat = props => {
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
      <path d="M18 2l3 3-3 3"></path>
      <path d="M6 22l-3-3 3-3"></path>
      <path d="M21 5H10a7 7 0 0 0-7 7"></path>
      <path d="M3 19h11a7 7 0 0 0 7-7"></path>
    </svg>
  );
};

ArrowRepeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRepeat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRepeat;
