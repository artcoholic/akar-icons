import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftThick = props => {
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
      <path d="M3 12l7-9v4.99L21 8v8H10v5l-7-9z"></path>
    </svg>
  );
};

ArrowLeftThick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftThick.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftThick;
