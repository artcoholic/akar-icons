import React from 'react';
import PropTypes from 'prop-types';

const TextAlignJustified = props => {
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
      <path d="M2 5h20M2 12h20M2 19h20"></path>
    </svg>
  );
};

TextAlignJustified.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextAlignJustified.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TextAlignJustified;
