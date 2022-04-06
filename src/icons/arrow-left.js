import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => {
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
      <path d="M11 5l-7 7 7 7"></path>
      <path d="M4 12h16"></path>
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeft;
