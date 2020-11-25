import React from 'react';
import PropTypes from 'prop-types';

const Clipboard = props => {
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
      id="Clipboard"
    >
      <path d="M15 4h4a1 1 0 011 1v15a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h4"></path>
      <path d="M9 5a3 3 0 013-3v0a3 3 0 013 3v1H9V5z"></path>
    </svg>
  );
};

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clipboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clipboard;
