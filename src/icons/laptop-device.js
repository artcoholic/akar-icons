import React from 'react';
import PropTypes from 'prop-types';

const LaptopDevice = props => {
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
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9H4V7z"></path>
      <path d="M2 19h20"></path>
    </svg>
  );
};

LaptopDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LaptopDevice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LaptopDevice;
