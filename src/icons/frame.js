import React from 'react';
import PropTypes from 'prop-types';

const Frame = props => {
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
      <path d="M6 3v18"></path>
      <path d="M18 3v18"></path>
      <path d="M3 6h18"></path>
      <path d="M3 18h18"></path>
    </svg>
  );
};

Frame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Frame.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Frame;
