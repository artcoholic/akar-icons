import React from 'react';
import PropTypes from 'prop-types';

const TextAlignLeft = props => {
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
      <path d="M3 6h18M3 12h10M3 18h15"></path>
    </svg>
  );
};

TextAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextAlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TextAlignLeft;
