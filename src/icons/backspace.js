import React from 'react';
import PropTypes from 'prop-types';

const Backspace = props => {
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
      id="Backspace"
    >
      <path d="M17 15l-6-6m6 0l-6 6"></path>
      <path d="M7.4 4.8A2 2 0 019 4h11a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-1.6-.8l-4.5-6a2 2 0 010-2.4l4.5-6z"></path>
    </svg>
  );
};

Backspace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Backspace.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Backspace;
