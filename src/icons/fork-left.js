import React from 'react';
import PropTypes from 'prop-types';

const ForkLeft = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M15 3v18m0-18l-4 4m4-4l4 4"></path>
      <path d="M8 10l-4 4 4 4"></path>
      <path d="M15 21v0a7 7 0 0 0-7-7H4"></path>
    </svg>
  );
};

ForkLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ForkLeft;
