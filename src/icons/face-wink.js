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
      id="FaceWink"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M15.766 15.319c-.967 1.251-2.68 2.242-4.766 1.513"></path>
      <path d="M8 9.01V9"></path>
      <path d="M17 10h-2"></path>
    </svg>
  );
};

FaceWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FaceWink.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default FaceWink;
