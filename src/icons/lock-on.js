import React from 'react';
import PropTypes from 'prop-types';

const LockOn = ({ color = "currentColor", size = "24", ...otherProps }) => {
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
      <rect x="3" y="10" width="18" height="12" rx="2"></rect>
      <path d="M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4H6V6z"></path>
    </svg>
  );
};

LockOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default LockOn;
