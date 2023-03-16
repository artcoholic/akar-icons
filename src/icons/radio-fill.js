import React from 'react';
import PropTypes from 'prop-types';

const RadioFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"></path>
      <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"></path>
    </svg>
  );
};

RadioFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RadioFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RadioFill;
