import React from 'react';
import PropTypes from 'prop-types';

const BatteryFull = props => {
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
      <rect x="2" y="6" width="18" height="12" rx="2"></rect>
      <path d="M7 10v4"></path>
      <path d="M11 10v4"></path>
      <path d="M15 10v4"></path>
      <path d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20v-4z"></path>
    </svg>
  );
};

BatteryFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryFull.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryFull;
