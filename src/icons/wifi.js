import React from 'react';
import PropTypes from 'prop-types';

const Wifi = props => {
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
      <path d="M2 10c6-6.667 14-6.667 20 0"></path>
      <path d="M6 14c3.6-4 8.4-4 12 0"></path>
      <circle cx="12" cy="18" r="1"></circle>
    </svg>
  );
};

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Wifi.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Wifi;
