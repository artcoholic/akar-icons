import React from 'react';
import PropTypes from 'prop-types';

const ZoomIn = props => {
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
      <path d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z"></path>
      <path d="M10.5 7v3.5m0 0V14m0-3.5H14m-3.5 0H7"></path>
    </svg>
  );
};

ZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ZoomIn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ZoomIn;
