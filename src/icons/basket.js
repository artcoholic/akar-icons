import React from 'react';
import PropTypes from 'prop-types';

const Basket = props => {
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
      <path d="M2.31 11.242A1 1 0 0 1 3.28 10h17.44a1 1 0 0 1 .97 1.242l-1.811 7.243A2 2 0 0 1 17.939 20H6.061a2 2 0 0 1-1.94-1.515L2.31 11.243z"></path>
      <path d="M9 14v2"></path>
      <path d="M15 14v2"></path>
      <path d="M6 10l4-6"></path>
      <path d="M18 10l-4-6"></path>
    </svg>
  );
};

Basket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Basket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Basket;
