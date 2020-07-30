import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRight = props => {
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
        d="M7 6a1 1 0 000 2h7.513l-8.22 8.293a1 1 0 101.414 1.414L16 9.341V17a1 1 0 102 0V7a1 1 0 00-1-1H7z"
      ></path>
    </svg>
  );
};

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpRight;
