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
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 110-2h2a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h2a1 1 0 010 2H6z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V3zm8 0H9v2h6V3z"
      ></path>
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
