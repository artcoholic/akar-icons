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
      id="BatteryFull"
    >
      <rect x="2" y="7" width="18" height="10" rx="2"></rect>
      <path d="M5 10v4"></path>
      <path d="M8 10v4"></path>
      <path d="M11 10v4"></path>
      <path d="M14 10v4"></path>
      <path d="M17 10v4"></path>
      <path d="M20 10h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H20v-4z"></path>
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
