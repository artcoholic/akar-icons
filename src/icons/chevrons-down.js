import React from 'react';
import PropTypes from 'prop-types';

const ChevronsDown = props => {
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
        d="M6.293 12.293a1 1 0 011.414 0L12 16.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.293 5.293a1 1 0 011.414 0L12 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

ChevronsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsDown;
