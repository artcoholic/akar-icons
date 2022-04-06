import React from 'react';
import PropTypes from 'prop-types';

const Infinite = props => {
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
      <path d="M5.636 16C2.91 16 2 14 2 12s.91-4 3.636-4c3.637 0 9.091 8 12.728 8C21.09 16 22 14 22 12s-.91-4-3.636-4c-3.637 0-9.091 8-12.728 8z"></path>
    </svg>
  );
};

Infinite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Infinite.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Infinite;
