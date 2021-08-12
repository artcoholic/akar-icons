import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightLeft = props => {
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
      <path d="M21 6H3m18 0l-4 4m4-4l-4-4"></path>
      <path d="M3 18h18M3 18l4 4m-4-4l4-4"></path>
    </svg>
  );
};

ArrowRightLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightLeft;
