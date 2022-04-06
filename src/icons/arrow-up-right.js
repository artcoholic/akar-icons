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
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M18 6L6 18"></path>
      <path d="M8 6h10v10"></path>
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
