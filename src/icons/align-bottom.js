import React from 'react';
import PropTypes from 'prop-types';

const AlignBottom = props => {
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
      <path d="M22 22H2"></path>
      <path d="M9 16V2m6 14V9"></path>
    </svg>
  );
};

AlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignBottom;
