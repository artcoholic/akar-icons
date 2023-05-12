import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
      <path d="M6.037 12C4.77 12.53 4 13.232 4 14c0 1.657 3.582 3 8 3s8-1.343 8-3c0-.768-.77-1.47-2.037-2"></path>
      <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6"></path>
      <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4"></path>
    </svg>
  );
};

Data.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Data;
