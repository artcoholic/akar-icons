import React from 'react';
import PropTypes from 'prop-types';

const Cart = props => {
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
      <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7z"></path>
      <path d="M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2"></path>
      <path d="M8 21h2"></path>
      <path d="M16 21h2"></path>
    </svg>
  );
};

Cart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cart;
