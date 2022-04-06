import React from 'react';
import PropTypes from 'prop-types';

const ToggleOffFill = props => {
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
        d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10H7zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
      ></path>
    </svg>
  );
};

ToggleOffFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ToggleOffFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ToggleOffFill;
