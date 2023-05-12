import React from 'react';
import PropTypes from 'prop-types';

const Bank = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M20 11V8l-8-5-8 5v3h16z"></path>
      <path d="M3 21h18"></path>
      <path d="M5 20v-5h2"></path>
      <path d="M17 20v-5h2"></path>
      <path d="M11 20v-5h2"></path>
    </svg>
  );
};

Bank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Bank;
