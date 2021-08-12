import React from 'react';
import PropTypes from 'prop-types';

const AlignHorizontalCenter = props => {
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
      <path d="M12 3v18"></path>
      <path d="M16 6h4v4h-4"></path>
      <path d="M8 10H4V6h4"></path>
      <path d="M16 14h2v4h-2"></path>
      <path d="M8 14H6v4h2"></path>
    </svg>
  );
};

AlignHorizontalCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignHorizontalCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignHorizontalCenter;
