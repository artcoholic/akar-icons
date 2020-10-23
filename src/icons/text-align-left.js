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
      id="TextAlignLeft"
    >
      <path d="M2 6h20M2 12h11M2 18h16"></path>
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
