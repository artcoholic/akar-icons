import React from 'react';
import PropTypes from 'prop-types';

const Percentage = ({ color = "currentColor", size = "24", ...otherProps }) => {
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
      <path d="M6 21L18 3"></path>
      <circle cx="7" cy="6" r="3"></circle>
      <circle cx="17" cy="18" r="3"></circle>
    </svg>
  );
};

Percentage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Percentage;
