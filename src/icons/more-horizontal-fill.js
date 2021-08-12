import React from 'react';
import PropTypes from 'prop-types';

const MoreHorizontalFill = props => {
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
        d="M2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
      ></path>
    </svg>
  );
};

MoreHorizontalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoreHorizontalFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoreHorizontalFill;
