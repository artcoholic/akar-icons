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
      id="DesktopDevice"
    >
      <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
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
