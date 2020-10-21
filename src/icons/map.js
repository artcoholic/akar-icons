import React from 'react';
import PropTypes from 'prop-types';

const Map = props => {
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
      <path d="M8.405 4.83L2 3v16l6.405 1.83a2 2 0 001.182-.026l4.826-1.608a2 2 0 011.182-.026L22 21V5l-6.405-1.83a2 2 0 00-1.182.026L9.587 4.804a2 2 0 01-1.182.026z"></path>
      <path d="M9 5v16"></path>
      <path d="M15 3v16"></path>
    </svg>
  );
};

Map.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Map.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Map;
