import React from 'react';
import PropTypes from 'prop-types';

const CheckCircle = props => {
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
        d="M15.663 3.773A9 9 0 1021 12v-.919a1 1 0 112 0V12A11.002 11.002 0 018.188 22.313a11 11 0 118.289-20.366 1 1 0 11-.814 1.826z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.707 3.293a1 1 0 010 1.414l-10 10.01a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.595l9.293-9.302a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckCircle;
