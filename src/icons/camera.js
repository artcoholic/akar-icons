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
      <path d="M6.278 5.89l.343-1.375A2 2 0 018.561 3h6.877a2 2 0 011.94 1.515l.344 1.375c.171.683.705 1.217 1.388 1.388a3.815 3.815 0 012.89 3.7V17a4 4 0 01-4 4H6a4 4 0 01-4-4v-6.021a3.815 3.815 0 012.89-3.701A1.907 1.907 0 006.278 5.89z"></path>
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
