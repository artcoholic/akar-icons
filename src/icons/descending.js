import React from 'react';
import PropTypes from 'prop-types';

const Descending = props => {
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
      <path d="M6 21V3m0 18l3-3.333M6 21l-3-3.333"></path>
      <path d="M14 3h8l-1 4h-7V3z"></path>
      <path d="M14 10h6l-1 4h-5v-4z"></path>
      <path d="M14 17h4l-1 4h-3v-4z"></path>
    </svg>
  );
};

Descending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Descending.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Descending;
