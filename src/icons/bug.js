import React from 'react';
import PropTypes from 'prop-types';

const Bug = props => {
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
      id="Bug"
    >
      <path d="M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V9zM8 6v-.425c0-.981.384-1.96 1.326-2.238 1.525-.45 3.823-.45 5.348 0C15.616 3.615 16 4.594 16 5.575V6M18.5 7.5L22 4M5.5 7.5L2 4M6 18l-4 3M5 12H1.5M22.5 12H19M18 18l4 3M12 13v8"></path>
    </svg>
  );
};

Bug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bug.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Bug;
