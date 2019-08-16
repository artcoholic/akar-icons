import React from 'react';
import PropTypes from 'prop-types';

const AlignRight = props => {
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
      <path d="M21 10H7"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M21 18H7"></path>
    </svg>
  );
};

AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignRight;
