import React from 'react';
import PropTypes from 'prop-types';

const Leaf = props => {
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
      id="Leaf"
    >
      <path d="M8 18C20.857 18 21 6.235 21 2 3 2 3 10.412 3 18v4"></path>
      <path d="M3 18s0-6 8-7"></path>
    </svg>
  );
};

Leaf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Leaf.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Leaf;
