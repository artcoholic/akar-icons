import React from 'react';
import PropTypes from 'prop-types';

const ChevronHorizontal = props => {
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
      <path d="M17 8l4 4-4 4"></path>
      <path d="M7 8l-4 4 4 4"></path>
    </svg>
  );
};

ChevronHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronHorizontal;
