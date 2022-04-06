import React from 'react';
import PropTypes from 'prop-types';

const Bluetooth = props => {
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
      <path d="M5 7l12 10-6 5V2l6 5L5 17"></path>
    </svg>
  );
};

Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bluetooth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bluetooth;
