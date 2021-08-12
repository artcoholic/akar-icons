import React from 'react';
import PropTypes from 'prop-types';

const LightBulb = props => {
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
    >
      <path d="M10 22h4M5 9a7 7 0 0 1 14 0 6.972 6.972 0 0 1-3 5.734l-.542 2.566a2 2 0 0 1-1.977 1.7h-2.962a2 2 0 0 1-1.977-1.7L8 14.745A6.992 6.992 0 0 1 5 9z"></path>
      <path d="M8 15h8"></path>
    </svg>
  );
};

LightBulb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LightBulb.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LightBulb;
