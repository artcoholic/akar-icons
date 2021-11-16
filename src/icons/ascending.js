import React from 'react';
import PropTypes from 'prop-types';

const Ascending = props => {
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
      <path d="M6 3v18M6 3l3 3.333M6 3L3 6.333"></path>
      <path d="M14 21h8l-1-4h-7v4z"></path>
      <path d="M14 14h6l-1-4h-5v4z"></path>
      <path d="M14 7h4l-1-4h-3v4z"></path>
    </svg>
  );
};

Ascending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Ascending.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Ascending;
