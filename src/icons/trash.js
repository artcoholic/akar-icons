import React from 'react';
import PropTypes from 'prop-types';

const Trash = props => {
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
      <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v2H3V7z"></path>
      <path d="M9 4a2 2 0 012-2h2a2 2 0 012 2v1H9V4z"></path>
      <path d="M5 9v11a2 2 0 002 2h10a2 2 0 002-2V9"></path>
      <path d="M12 10v4"></path>
    </svg>
  );
};

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Trash;
