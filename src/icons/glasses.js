import React from 'react';
import PropTypes from 'prop-types';

const Glasses = props => {
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
      <circle cx="6" cy="14" r="4"></circle>
      <circle cx="18" cy="14" r="4"></circle>
      <path d="M10 14l.211-.106a4 4 0 0 1 3.578 0L14 14"></path>
      <path d="M19 6l2.838 6.623a2 2 0 0 1 .162.788V14"></path>
      <path d="M5 6l-2.838 6.623A2 2 0 0 0 2 13.41V14"></path>
    </svg>
  );
};

Glasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Glasses.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Glasses;
