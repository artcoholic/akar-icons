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
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 5.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L7.414 13H19a1 1 0 100-2H7.414l5.293-5.293z"
      ></path>
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
