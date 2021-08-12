import React from 'react';
import PropTypes from 'prop-types';

const ZoomFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM6 16.2h9V9.6a1.8 1.8 0 0 0-1.8-1.8h-9v6.6A1.8 1.8 0 0 0 6 16.2zm10.2-2.4l3.6 2.4V7.8l-3.6 2.4v3.6z"
      ></path>
    </svg>
  );
};

ZoomFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ZoomFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ZoomFill;
