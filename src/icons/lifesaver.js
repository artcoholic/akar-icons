import React from 'react';
import PropTypes from 'prop-types';

const Lifesaver = props => {
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
      <g clipPath="url(#clip0_73_30)">
        <circle cx="12" cy="12" r="10" transform="rotate(45 12 12)"></circle>
        <circle cx="12" cy="12" r="4" transform="rotate(45 12 12)"></circle>
        <path d="M19.071 4.929l-4.243 4.243"></path>
        <path d="M9.172 14.828l-4.243 4.243"></path>
        <path d="M19.071 19.071l-4.243-4.243"></path>
        <path d="M9.172 9.172L4.929 4.929"></path>
      </g>
      <defs>
        <clipPath id="clip0_73_30">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Lifesaver.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Lifesaver.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Lifesaver;
