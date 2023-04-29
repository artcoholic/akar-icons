import React from 'react';
import PropTypes from 'prop-types';

const ToggleOnFill = ({ color = "currentColor", size = "24", ...otherProps }) => {
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
        d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10H7zm10 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
      ></path>
    </svg>
  );
};

ToggleOnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ToggleOnFill;
