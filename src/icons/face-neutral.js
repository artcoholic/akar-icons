import React from 'react';
import PropTypes from 'prop-types';

const FaceNeutral = props => {
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
      <path d="M8 9.05v-.1"></path>
      <path d="M16 9.05v-.1"></path>
      <path d="M8 14h8"></path>
    </svg>
  );
};

FaceNeutral.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FaceNeutral.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FaceNeutral;
