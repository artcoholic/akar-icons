import React from 'react';
import PropTypes from 'prop-types';

const Hammer = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M4 22l-2-2 1-1 2 2-1 1z"></path>
      <path d="M9 13l2 2"></path>
      <path d="M12 12l-8 8"></path>
      <path d="M20 4l-1 1"></path>
      <path d="M9.707 7.707a1 1 0 0 1 0-1.414l4.086-4.086a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-4.086 4.086a1 1 0 0 1-1.414 0L9.707 7.707z"></path>
    </svg>
  );
};

Hammer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Hammer;
