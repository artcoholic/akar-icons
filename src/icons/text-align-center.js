import React from 'react';
import PropTypes from 'prop-types';

const TextAlignCenter = props => {
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
      <path d="M3 6h18M7 12h10M5 18h14"></path>
    </svg>
  );
};

TextAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TextAlignCenter;
