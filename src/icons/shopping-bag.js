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
    >
      <path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16l.803-10z"></path>
      <path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5"></path>
    </svg>
  );
};

ShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShoppingBag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShoppingBag;
