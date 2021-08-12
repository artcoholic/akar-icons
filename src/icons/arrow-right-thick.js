import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightThick = props => {
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
      <path d="M21 12l-7-9v4.99L3 8v8h11v5l7-9z"></path>
    </svg>
  );
};

ArrowRightThick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightThick.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightThick;
