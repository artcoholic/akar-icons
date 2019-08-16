import React from 'react';
import PropTypes from 'prop-types';

const CloudLightning = props => {
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
      <g clip-path="url(#clip0)">
        <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"></path>
        <path d="M13 11l-4 6h6l-4 6"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudLightning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudLightning;
