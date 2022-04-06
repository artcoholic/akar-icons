import React from 'react';
import PropTypes from 'prop-types';

const Trophy = props => {
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
      <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V4z"></path>
      <path d="M9 22h6l-3-5-3 5z"></path>
      <path d="M5 4H4a2 2 0 0 0-2 2v1.239a4 4 0 0 0 2.128 3.535L5.5 11.5"></path>
      <path d="M19 4h1a2 2 0 0 1 2 2v.637a5 5 0 0 1-2.66 4.419l-.84.444"></path>
    </svg>
  );
};

Trophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trophy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Trophy;
