import React from 'react';
import PropTypes from 'prop-types';

const Utensils = props => {
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
      <path d="M11 8V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4z"></path>
      <path d="M15 16V2h3a4 4 0 0 1 4 4v10h-4"></path>
      <path d="M15 16v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5"></path>
      <path d="M5 12v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-9"></path>
      <path d="M5 6V2"></path>
      <path d="M8 6V2"></path>
    </svg>
  );
};

Utensils.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Utensils.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Utensils;
