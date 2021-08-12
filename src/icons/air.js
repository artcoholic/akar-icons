import React from 'react';
import PropTypes from 'prop-types';

const Air = props => {
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
      <path d="M3 8h7a3 3 0 1 0-3-3"></path>
      <path d="M4 16h11a3 3 0 1 1-3 3"></path>
      <path d="M2 12h17a3 3 0 1 0-3-3"></path>
    </svg>
  );
};

Air.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Air.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Air;
