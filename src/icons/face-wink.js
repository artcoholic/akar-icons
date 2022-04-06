import React from 'react';
import PropTypes from 'prop-types';

const FaceWink = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M7 9h2"></path>
      <path d="M16 9.05v-.1"></path>
      <path d="M16 15c-.5 1-1.79 2-4 2s-3.5-1-4-2"></path>
    </svg>
  );
};

FaceWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FaceWink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FaceWink;
