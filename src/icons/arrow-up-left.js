import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = props => {
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
        d="M7 6a1 1 0 00-1 1v10a1 1 0 102 0V9.34l8.293 8.367a1 1 0 001.414-1.414L9.487 8H17a1 1 0 100-2H7z"
      ></path>
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpLeft;
