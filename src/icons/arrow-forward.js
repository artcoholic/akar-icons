import React from 'react';
import PropTypes from 'prop-types';

const ArrowForward = props => {
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
      <path d="M16 5l5 5-5 5"></path>
      <path d="M21 10h-8C7.477 10 3 14.477 3 20v1"></path>
    </svg>
  );
};

ArrowForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowForward;
