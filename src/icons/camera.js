import React from 'react';
import PropTypes from 'prop-types';

const Camera = props => {
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
      id="Camera"
    >
      <path d="M6.322 6.392l.356-1.784A2 2 0 018.64 3h6.72a2 2 0 011.962 1.608l.356 1.784A2 2 0 0019.64 8H20a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2v-9a2 2 0 012-2h.36a2 2 0 001.962-1.608z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  );
};

Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Camera.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Camera;
