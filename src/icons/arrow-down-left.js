import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeft = props => {
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
      <path d="M6 18L18 6"></path>
      <path d="M6 8v10h10"></path>
    </svg>
  );
};

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownLeft;
