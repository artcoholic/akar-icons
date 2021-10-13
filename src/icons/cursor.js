import React from 'react';
import PropTypes from 'prop-types';

const Cursor = props => {
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
      <path d="M3 3l7 19 2.051-6.154a6 6 0 0 1 3.795-3.795L22 10 3 3z"></path>
    </svg>
  );
};

Cursor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cursor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cursor;
