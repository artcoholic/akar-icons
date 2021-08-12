import React from 'react';
import PropTypes from 'prop-types';

const Coin = props => {
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
      <ellipse rx="8.5" ry="9" transform="matrix(-1 0 0 1 10.5 12)"></ellipse>
      <path d="M13 8.8a3.583 3.583 0 0 0-2.25-.8C8.679 8 7 9.79 7 12s1.679 4 3.75 4c.844 0 1.623-.298 2.25-.8"></path>
      <path d="M11 3c3.667 0 11 .9 11 9s-7.333 9-11 9"></path>
    </svg>
  );
};

Coin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Coin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Coin;
