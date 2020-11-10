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
      id="Map"
    >
      <path d="M8.405 4.83L4.55 3.728A2 2 0 002 5.651v11.84a2 2 0 001.45 1.923l4.955 1.416a2 2 0 001.182-.026l4.826-1.608a2 2 0 011.182-.026l3.856 1.102A2 2 0 0022 18.349V6.509a2 2 0 00-1.45-1.923L15.594 3.17a2 2 0 00-1.182.026L9.587 4.804a2 2 0 01-1.182.026z"></path>
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
