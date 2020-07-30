import React from 'react';
import PropTypes from 'prop-types';

const CheckSquare = props => {
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
        d="M22.707 3.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.586l9.293-9.293a1 1 0 011.414 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h11a1 1 0 110 2H5z"
      ></path>
    </svg>
  );
};

CheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckSquare;
