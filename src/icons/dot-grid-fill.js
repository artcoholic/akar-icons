import React from 'react';
import PropTypes from 'prop-types';

const DotGridFill = props => {
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
        d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"
      ></path>
    </svg>
  );
};

DotGridFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DotGridFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DotGridFill;
