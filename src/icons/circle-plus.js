import React from 'react';
import PropTypes from 'prop-types';

const CirclePlus = props => {
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
      <path d="M12 8v4m0 0v4m0-4h4m-4 0H8"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

CirclePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CirclePlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CirclePlus;
