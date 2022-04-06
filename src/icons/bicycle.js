import React from 'react';
import PropTypes from 'prop-types';

const Bicycle = props => {
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
      <circle cx="6" cy="15" r="4"></circle>
      <circle cx="18" cy="15" r="4"></circle>
      <path d="M6 15l2-7h7.5"></path>
      <path d="M6 5h3"></path>
      <path d="M18 15L15 5h4"></path>
      <path d="M19 5h.5A1.5 1.5 0 0 1 21 6.5v0A1.5 1.5 0 0 1 19.5 8H19"></path>
    </svg>
  );
};

Bicycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bicycle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bicycle;
