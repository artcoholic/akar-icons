import React from 'react';
import PropTypes from 'prop-types';

const ChevronsUp = props => {
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
        d="M11.293 5.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 12.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
      ></path>
    </svg>
  );
};

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsUp;
