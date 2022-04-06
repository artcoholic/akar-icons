import React from 'react';
import PropTypes from 'prop-types';

const Truck = props => {
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
      <path d="M10 17h6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h1"></path>
      <path d="M22 16v-4a4 4 0 0 0-4-4h-2v9h5a1 1 0 0 0 1-1z"></path>
      <path d="M15 17a3 3 0 1 0 6 0h-6z"></path>
      <path d="M22 14h-2"></path>
      <circle cx="7" cy="17" r="3"></circle>
    </svg>
  );
};

Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Truck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Truck;
