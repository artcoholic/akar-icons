import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDown = props => {
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
      <path d="M6 3v18M6 3l4 4M6 3L2 7"></path>
      <path d="M18 21V3m0 18l4-4m-4 4l-4-4"></path>
    </svg>
  );
};

ArrowUpDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpDown;
