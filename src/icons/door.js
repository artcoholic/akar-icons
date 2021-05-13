import React from 'react';
import PropTypes from 'prop-types';

const Door = props => {
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
      id="Door"
    >
      <path d="M5 2h11a3 3 0 013 3v14a1 1 0 01-1 1h-3"></path>
      <path d="M5 2l7.588 1.518A3 3 0 0115 6.459V20.78a1 1 0 01-1.196.98l-7.196-1.438A2 2 0 015 18.36V2z"></path>
      <path d="M12 12v2"></path>
    </svg>
  );
};

Door.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Door.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Door;
