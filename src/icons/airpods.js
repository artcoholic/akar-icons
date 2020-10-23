import React from 'react';
import PropTypes from 'prop-types';

const Airpods = props => {
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
      id="Airpods"
    >
      <circle r="4" transform="matrix(-1 0 0 1 18 6)"></circle>
      <circle cx="6" cy="6" r="4"></circle>
      <path d="M14 6v15a1 1 0 001 1h2c.552 0 1-.45 1-1.001V10.57"></path>
      <path d="M10 6v15a1 1 0 01-1 1H7c-.552 0-1-.45-1-1.001V10.57"></path>
      <line y1="-1" x2="3" y2="-1" transform="matrix(-1 0 0 1 17 19)"></line>
      <line x1="7" y1="18" x2="10" y2="18"></line>
      <path d="M20 3v0a5.408 5.408 0 000 6v0"></path>
      <path d="M4 3v0a5.408 5.408 0 010 6v0"></path>
    </svg>
  );
};

Airpods.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Airpods.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Airpods;
