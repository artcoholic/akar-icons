import React from 'react';
import PropTypes from 'prop-types';

const MobileDevice = props => {
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
      <rect x="6" y="2" width="12" height="20" rx="2"></rect>
      <path d="M11.95 18h.1"></path>
    </svg>
  );
};

MobileDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobileDevice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobileDevice;
