import React from 'react';
import PropTypes from 'prop-types';

const WineGlass = props => {
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
      <path d="M12 13c6 0 8-4.477 8-10H4c0 5.523 2 10 8 10z"></path>
      <path d="M12 13v7"></path>
      <path d="M5 8h14"></path>
      <path d="M8 22h8l-4-2-4 2z"></path>
    </svg>
  );
};

WineGlass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WineGlass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WineGlass;
