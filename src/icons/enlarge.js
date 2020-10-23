import React from 'react';
import PropTypes from 'prop-types';

const Enlarge = props => {
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
      id="Enlarge"
    >
      <path d="M3 21l6.5-6.5"></path>
      <path d="M14.5 9.5L21 3"></path>
      <path d="M15 3h6v6"></path>
      <path d="M3 15v6h6"></path>
    </svg>
  );
};

Enlarge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Enlarge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Enlarge;
