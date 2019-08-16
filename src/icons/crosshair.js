import React from 'react';
import PropTypes from 'prop-types';

const Crosshair = props => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M22 12h-4"></path>
      <path d="M6 12H2"></path>
      <path d="M12 6V2"></path>
      <path d="M12 22v-4"></path>
    </svg>
  );
};

Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Crosshair.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Crosshair;
