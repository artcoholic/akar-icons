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
      id="Utensils"
    >
      <path d="M11 8V2H2v6a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4zM15 16V2h3a4 4 0 0 1 4 4v10h-4M15 16v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5M5 16v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5M5 6V2M8 6V2"></path>
    </svg>
  );
};

Utensils.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Utensils.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Utensils;
