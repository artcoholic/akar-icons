import React from 'react';
import PropTypes from 'prop-types';

const DragHorizontalFill = props => {
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
        d="M22 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      ></path>
    </svg>
  );
};

DragHorizontalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DragHorizontalFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DragHorizontalFill;
