import React from 'react';
import PropTypes from 'prop-types';

const AlignCenter = props => {
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
      <path d="M18 10H6"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M18 18H6"></path>
    </svg>
  );
};

AlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignCenter;
