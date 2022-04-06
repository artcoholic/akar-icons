import React from 'react';
import PropTypes from 'prop-types';

const VueFill = props => {
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
      <path d="M19.114 2H15l-3 4.9L9.429 2H0l12 21L24 2h-4.886zM3 3.75h2.914L12 14.6l6.086-10.85H21L12 19.5 3 3.75z"></path>
    </svg>
  );
};

VueFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VueFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VueFill;
