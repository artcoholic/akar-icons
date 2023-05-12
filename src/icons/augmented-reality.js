import React from 'react';
import PropTypes from 'prop-types';

const AugmentedReality = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
      <path d="M10.971 6.617a2 2 0 0 1 2.058 0l3.486 2.092a1 1 0 0 1 .485.857v4.302a2 2 0 0 1-.971 1.715l-3 1.8a2 2 0 0 1-2.058 0l-3-1.8A2 2 0 0 1 7 13.868V9.566a1 1 0 0 1 .486-.857l3.485-2.092z"></path>
      <path d="M7 9l5 2.759m0 0L17 9m-5 2.759V17"></path>
      <path d="M6 2H4a2 2 0 0 0-2 2v2"></path>
      <path d="M18 22h2a2 2 0 0 0 2-2v-2"></path>
      <path d="M22 6V4a2 2 0 0 0-2-2h-2"></path>
      <path d="M2 18v2a2 2 0 0 0 2 2h2"></path>
    </svg>
  );
};

AugmentedReality.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AugmentedReality;
