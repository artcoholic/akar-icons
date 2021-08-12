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
      <path d="M21 22H3"></path>
      <path d="M6 18V2h4v16H6z"></path>
      <path d="M14 18V8h4v10h-4z"></path>
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
