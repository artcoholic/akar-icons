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
    >
      <path d="M6.379 6.485l.242-.97A2 2 0 018.561 4h6.877a2 2 0 011.94 1.515l.243.97A2 2 0 0019.561 8H20a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h.438a2 2 0 001.94-1.515z"></path>
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
