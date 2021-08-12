import React from 'react';
import PropTypes from 'prop-types';

const Devices = props => {
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
      <path d="M10 15H4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path>
      <path d="M2 18h12"></path>
      <path d="M14 9.2c0-.663.597-1.2 1.333-1.2h5.334C21.403 8 22 8.537 22 9.2v9.6c0 .663-.597 1.2-1.333 1.2h-5.334C14.597 20 14 19.463 14 18.8V9.2z"></path>
      <path d="M18 17h.01"></path>
    </svg>
  );
};

Devices.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Devices.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Devices;
