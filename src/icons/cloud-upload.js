import React from 'react';
import PropTypes from 'prop-types';

const CloudUpload = props => {
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
      <path d="M12 12v9m0-9l-2.5 2m2.5-2l2.5 2"></path>
      <path d="M5.034 9.117A4.002 4.002 0 0 0 6 17h1"></path>
      <path d="M15.83 7.138a5.5 5.5 0 0 0-10.796 1.98S5.187 10 5.5 10.5"></path>
      <path d="M17 17a5 5 0 1 0-1.17-9.862L14.5 7.5"></path>
    </svg>
  );
};

CloudUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudUpload;
