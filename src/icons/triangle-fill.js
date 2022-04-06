import React from 'react';
import PropTypes from 'prop-types';

const TriangleFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029l8.468-14.113z"></path>
    </svg>
  );
};

TriangleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TriangleFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TriangleFill;
