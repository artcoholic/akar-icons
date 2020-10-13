import React from 'react';
import PropTypes from 'prop-types';

const DesktopDevice = props => {
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
      <path d="M2 5a1 1 0 011-1h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V5z"></path>
      <path d="M8 20h8"></path>
    </svg>
  );
};

DesktopDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DesktopDevice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DesktopDevice;
