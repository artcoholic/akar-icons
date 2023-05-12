import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <ellipse
        cx="9.5"
        cy="10"
        rx="9.5"
        ry="10"
        transform="matrix(-1 0 0 1 20 2)"
      ></ellipse>
      <path d="M13 8.8a3.583 3.583 0 0 0-2.25-.8C8.679 8 7 9.79 7 12s1.679 4 3.75 4c.844 0 1.623-.298 2.25-.8"></path>
      <path d="M10 2c4.333 0 13 1 13 10s-8.667 10-13 10"></path>
    </svg>
  );
};

Coin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Coin;
