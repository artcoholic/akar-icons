import React from 'react';
import PropTypes from 'prop-types';

const Width = props => {
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
      id="Width"
    >
      <path d="M21 12H3"></path>
      <path d="M6 16l-4-4 4-4"></path>
      <path d="M18 16l4-4-4-4"></path>
    </svg>
  );
};

Width.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Width.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Width;
