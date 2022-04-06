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
      <path d="M8.368 4.79l-2.736-.913A2 2 0 0 0 3 5.775v11.783a2 2 0 0 0 1.368 1.898l4 1.333a2 2 0 0 0 1.264 0l4.736-1.578a2 2 0 0 1 1.264 0l2.736.912A2 2 0 0 0 21 18.224V6.442a2 2 0 0 0-1.367-1.898l-4-1.333a2 2 0 0 0-1.265 0L9.631 4.789a2 2 0 0 1-1.264 0z"></path>
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
