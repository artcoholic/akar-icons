import React from 'react';
import PropTypes from 'prop-types';

const Coffee = props => {
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
      <path d="M11 7c4.418 0 8 .895 8 2s-3.582 2-8 2-8-.895-8-2c0-.357.375-.693 1.033-.984"></path>
      <path d="M3 9v9.343c0 1.061.44 2.08 1.409 2.513C5.624 21.399 7.711 22 11 22c3.29 0 5.377-.601 6.591-1.144.968-.433 1.409-1.452 1.409-2.513V9"></path>
      <path d="M19 10v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0"></path>
      <path d="M7 3v4"></path>
      <path d="M11 2v2"></path>
      <path d="M15 4v3"></path>
    </svg>
  );
};

Coffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Coffee.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Coffee;
