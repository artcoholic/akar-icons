import React from 'react';
import PropTypes from 'prop-types';

const ChevronsLeft = props => {
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
        d="M11.707 6.293a1 1 0 010 1.414L7.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.707 6.293a1 1 0 010 1.414L14.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsLeft;
