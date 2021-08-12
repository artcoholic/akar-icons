import React from 'react';
import PropTypes from 'prop-types';

const HexagonFill = props => {
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
      <path d="M11.036 1.53a2 2 0 0 1 1.928 0l8 4.4A2 2 0 0 1 22 7.683v8.634a2 2 0 0 1-1.036 1.753l-8 4.4a2 2 0 0 1-1.928 0l-8-4.4A2 2 0 0 1 2 16.317V7.683A2 2 0 0 1 3.036 5.93l8-4.4z"></path>
    </svg>
  );
};

HexagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HexagonFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HexagonFill;
