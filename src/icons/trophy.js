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
      id="Trophy"
    >
      <path d="M5 4a2 2 0 012-2h10a2 2 0 012 2v5a7 7 0 01-7 7v0a7 7 0 01-7-7V4z"></path>
      <path d="M12 16v3"></path>
      <path d="M9 22h6l-3-3-3 3z"></path>
      <path d="M5 4H4a2 2 0 00-2 2v1.783a4 4 0 001.88 3.392L6 12.5"></path>
      <path d="M19 4h1a2 2 0 012 2v1.229a5 5 0 01-2.35 4.24L18 12.5"></path>
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
