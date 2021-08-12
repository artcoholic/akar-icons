import React from 'react';
import PropTypes from 'prop-types';

const WatchDevice = props => {
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
      <path d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z"></path>
      <path d="M9 22h6"></path>
      <path d="M9 2h6"></path>
    </svg>
  );
};

WatchDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WatchDevice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WatchDevice;
