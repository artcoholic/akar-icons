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
      <path d="M18 5V3.618c0-.379-.216-.722-.574-.846C16.572 2.477 14.763 2 12 2c-2.763 0-4.572.477-5.426.772-.358.124-.574.467-.574.846V5c0 1.636 1 2 2 3l1 1v11a2 2 0 002 2h2a2 2 0 002-2V9l1-1c1-1 2-1.364 2-3z"></path>
      <path d="M6 3s1 2 6 2 6-2 6-2"></path>
      <path d="M12 11v1"></path>
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
