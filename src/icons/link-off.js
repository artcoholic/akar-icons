import React from 'react';
import PropTypes from 'prop-types';

const LinkOff = props => {
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
      <path d="M15 6h1a6 6 0 0 1 0 12h-1"></path>
      <path d="M9 18H8A6 6 0 0 1 8 6h1"></path>
    </svg>
  );
};

LinkOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkOff;
