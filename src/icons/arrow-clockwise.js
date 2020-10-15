import React from 'react';
import PropTypes from 'prop-types';

const ArrowClockwise = props => {
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
      <path d="M20.032 16.06A8.999 8.999 0 1118.74 6.035"></path>
      <path d="M16 7.39l4 .5.5-4"></path>
    </svg>
  );
};

ArrowClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowClockwise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowClockwise;
