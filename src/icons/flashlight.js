import React from 'react';
import PropTypes from 'prop-types';

const Flashlight = props => {
  const { color, size, ...otherProps } = props;
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
      id="Flashlight"
    >
      <path d="M19 5V3.72c0-.43-.275-.81-.692-.92C17.2 2.51 14.854 2 12 2c-2.854 0-5.2.51-6.308.8A.939.939 0 005 3.72V5c0 1.636 2 4 3 5l.847 10.166A2 2 0 0010.84 22h2.32a2 2 0 001.993-1.834L16 10c1-1 3-3.364 3-5z"></path>
      <path d="M12 11v2"></path>
      <ellipse cx="12" cy="4" rx="7" ry="2"></ellipse>
    </svg>
  );
};

Flashlight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Flashlight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Flashlight;
