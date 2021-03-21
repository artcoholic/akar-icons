import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBag = props => {
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
      id="ShoppingBag"
    >
      <path d="M4.051 8.92A1 1 0 015.048 8h13.904a1 1 0 01.997.92l.877 10.92A2 2 0 0118.833 22H5.167a2 2 0 01-1.993-2.16L4.05 8.92z"></path>
      <path d="M16 11V6a4 4 0 00-4-4v0a4 4 0 00-4 4v5"></path>
    </svg>
  );
};

ShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShoppingBag.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default ShoppingBag;
