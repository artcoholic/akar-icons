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
      <path d="M2 7a2 2 0 012-2h16a2 2 0 012 2v2H2V7z"></path>
      <path d="M7 4a2 2 0 012-2h6a2 2 0 012 2v1H7V4z"></path>
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
      <path d="M9 13v5"></path>
      <path d="M15 13v5"></path>
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
