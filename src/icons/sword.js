import React from 'react';
import PropTypes from 'prop-types';

const Sword = props => {
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
      <path d="M18 3l4-1-1 4-10 10-2.5-.5L8 13 18 3z"></path>
      <path d="M2 20l2 2"></path>
      <path d="M5 14l1 4 4 1"></path>
      <path d="M6 18l-3 3"></path>
    </svg>
  );
};

Sword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sword.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Sword;
