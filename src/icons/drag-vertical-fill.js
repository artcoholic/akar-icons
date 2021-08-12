import React from 'react';
import PropTypes from 'prop-types';

const DragVerticalFill = props => {
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
        d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
    </svg>
  );
};

DragVerticalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DragVerticalFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DragVerticalFill;
