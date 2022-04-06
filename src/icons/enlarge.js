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
    >
      <path d="M14.5 9.5L21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"></path>
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
