import React from 'react';
import PropTypes from 'prop-types';

const File = props => {
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
      id="File"
    >
      <path d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.375 2H6a2 2 0 00-2 2z"></path>
      <path d="M14 6V2l6 6h-4a2 2 0 01-2-2z"></path>
      <path d="M9 13h6"></path>
      <path d="M9 17h3"></path>
    </svg>
  );
};

File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

File.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default File;
