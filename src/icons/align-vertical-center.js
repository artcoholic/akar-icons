import React from 'react';
import PropTypes from 'prop-types';

const AlignVerticalCenter = props => {
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
      <path d="M21 12H3"></path>
      <path d="M6 16v4h4v-4"></path>
      <path d="M14 16v2h4v-2"></path>
      <path d="M14 8V6h4v2"></path>
      <path d="M10 8V4H6v4"></path>
    </svg>
  );
};

AlignVerticalCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignVerticalCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignVerticalCenter;
