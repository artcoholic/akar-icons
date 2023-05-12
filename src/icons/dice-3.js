import React from 'react';
import PropTypes from 'prop-types';

const Dice3 = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <path d="M12.25 11.75v.5"></path>
      <path d="M8.25 7.75v.5"></path>
      <path d="M15.75 15.75v.5"></path>
      <path d="M8 8h.5"></path>
      <path d="M12 12h.5"></path>
      <path d="M15.5 16h.5"></path>
    </svg>
  );
};

Dice3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Dice3;
