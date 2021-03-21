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
      <path d="M14 6c0 2.21 1.644 4 4 4s4-1.79 4-4-1.644-4-4-4-4 1.79-4 4z"></path>
      <path d="M10 6c0 2.21-1.644 4-4 4S2 8.21 2 6s1.644-4 4-4 4 1.79 4 4z"></path>
      <path d="M14 6v14a2 2 0 002 2v0a2 2 0 002-2V10.57"></path>
      <path d="M10 6v14a2 2 0 01-2 2v0a2 2 0 01-2-2V10.57"></path>
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
  size: '24',
  display: 'block'
};

export default Airpods;
