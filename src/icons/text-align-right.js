import React from 'react';
import PropTypes from 'prop-types';

const TextAlignRight = props => {
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
      <path d="M3 6h18m-10 6h10M6 18h15"></path>
    </svg>
  );
};

TextAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextAlignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TextAlignRight;
