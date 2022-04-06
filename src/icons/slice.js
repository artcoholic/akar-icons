import React from 'react';
import PropTypes from 'prop-types';

const Slice = props => {
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
      <path d="M13 21H3l10-10v10z"></path>
      <path d="M5 19L21 3v4l-8 8"></path>
    </svg>
  );
};

Slice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Slice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Slice;
