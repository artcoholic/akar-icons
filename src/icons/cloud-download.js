import React from 'react';
import PropTypes from 'prop-types';

const CloudDownload = props => {
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
      id="CloudDownload"
    >
      <path d="M12 22V12m0 10l-3-3m3 3l3-3"></path>
      <path d="M5.034 8.117A4.002 4.002 0 006 16h1"></path>
      <path d="M15.83 6.138a5.5 5.5 0 00-10.796 1.98S5.187 9 5.5 9.5"></path>
      <path d="M17 16a5 5 0 10-1.17-9.862L14.5 6.5"></path>
    </svg>
  );
};

CloudDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudDownload.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default CloudDownload;
