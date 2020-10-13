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
    >
      <circle r="4.5" transform="matrix(-1 0 0 1 18.5 6.5)"></circle>
      <circle cx="5.5" cy="6.5" r="4.5"></circle>
      <path d="M14 7v15a1 1 0 001 1h1c.552 0 1-.45 1-1.001V11.57"></path>
      <path d="M10 7v15a1 1 0 01-1 1H8c-.552 0-1-.45-1-1.001V11.57"></path>
      <line y1="-1" x2="3" y2="-1" transform="matrix(-1 0 0 1 17 20)"></line>
      <line x1="7" y1="19" x2="10" y2="19"></line>
      <path d="M21 4l-.5.626a3 3 0 000 3.748L21 9"></path>
      <path d="M3 4l.5.626a3 3 0 010 3.748L3 9"></path>
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
