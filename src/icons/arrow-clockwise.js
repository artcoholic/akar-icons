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
      <path d="M19.734 16.06a8.923 8.923 0 0 1-3.915 3.978 8.706 8.706 0 0 1-5.471.832 8.795 8.795 0 0 1-4.887-2.64 9.067 9.067 0 0 1-2.388-5.079 9.136 9.136 0 0 1 1.044-5.53 8.904 8.904 0 0 1 4.069-3.815 8.7 8.7 0 0 1 5.5-.608c1.85.401 3.366 1.313 4.62 2.755.151.16.735.806 1.22 1.781"></path>
      <path d="M15.069 7.813l5.04.907L21 3.59"></path>
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
