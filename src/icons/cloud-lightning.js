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
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0)">
        <path d="M19 17.9c-.5 0-.9-.3-1-.8-.1-.5.2-1.1.8-1.2 2.2-.4 3.6-2.6 3.1-4.7-.4-1.9-2-3.2-3.9-3.2h-1.3c-.5 0-.9-.3-1-.8-1-3.7-4.8-6-8.5-5-1.8.5-3.3 1.6-4.2 3.2-1 1.7-1.3 3.5-.8 5.4.5 1.9 1.7 3.4 3.4 4.4.5.2.7.8.4 1.3-.3.5-.9.7-1.4.4C2.4 15.7.9 13.7.2 11.3c-.6-2.3-.3-4.8 1-6.8C2.4 2.4 4.4 1 6.7.4c4.5-1.2 9.2 1.4 10.7 5.7h.6c2.8 0 5.3 2 5.9 4.8.7 3.2-1.4 6.4-4.7 7.1-.1-.1-.1-.1-.2-.1z"></path>
        <path d="M11 24c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l3-4.4H9c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l4-6c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-3 4.4H15c.4 0 .7.2.9.5.2.3.2.7 0 1l-4 6c-.3.3-.6.5-.9.5z"></path>
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
