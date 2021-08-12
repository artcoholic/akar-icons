import React from 'react';
import PropTypes from 'prop-types';

const ArrowBack = props => {
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
      <path d="M8 5l-5 5 5 5"></path>
      <path d="M3 10h8c5.523 0 10 4.477 10 10v1"></path>
    </svg>
  );
};

ArrowBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowBack;
