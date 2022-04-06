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
      <path d="M22 3v18"></path>
      <rect x="2" y="6" width="16" height="4"></rect>
      <rect x="8" y="14" width="10" height="4"></rect>
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
