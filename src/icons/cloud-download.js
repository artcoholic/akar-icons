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
      <path d="M17 16a5 5 0 10-1.17-9.862m0 0a5.5 5.5 0 00-10.796 1.98m10.796-1.98L14.5 6.5M5.034 8.117A4.002 4.002 0 006 16h1M5.034 8.117S5.188 9 5.5 9.5"></path>
      <path d="M12 22V12m0 10l-3-3m3 3l3-3"></path>
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
