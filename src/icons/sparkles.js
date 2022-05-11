import React from 'react';
import PropTypes from 'prop-types';

const Sparkles = props => {
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
      <path d="M5 2l.19.94a4 4 0 0 0 2.57 2.974L8 6l-.24.086A4 4 0 0 0 5.19 9.06L5 10l-.19-.94a4 4 0 0 0-2.57-2.974L2 6l.24-.086A4 4 0 0 0 4.81 2.94L5 2z"></path>
      <path d="M8 16l.23 1.276a2 2 0 0 0 1.219 1.501L10 19l-.551.223a2 2 0 0 0-1.22 1.5L8 22l-.23-1.276a2 2 0 0 0-1.219-1.501L6 19l.551-.223a2 2 0 0 0 1.22-1.5L8 16z"></path>
      <path d="M16 3l.556 2.654a8 8 0 0 0 5.213 5.92L23 12l-1.231.426a8 8 0 0 0-5.213 5.92L16 21l-.556-2.654a8 8 0 0 0-5.213-5.92L9 12l1.231-.426a8 8 0 0 0 5.213-5.92L16 3z"></path>
    </svg>
  );
};

Sparkles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sparkles.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Sparkles;
