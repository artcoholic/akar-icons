import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharging = props => {
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
      <path d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20v-4z"></path>
      <path d="M11.4 9L9 12h4l-2.4 3"></path>
    </svg>
  );
};

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryCharging;
