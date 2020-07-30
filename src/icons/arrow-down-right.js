import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRight = props => {
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
        d="M7.707 6.293a1 1 0 00-1.414 1.414L14.586 16H7a1 1 0 100 2h10.003a.996.996 0 00.71-.3.997.997 0 00.287-.697V7a1 1 0 10-2 0v7.586L7.707 6.293z"
      ></path>
    </svg>
  );
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownRight;
