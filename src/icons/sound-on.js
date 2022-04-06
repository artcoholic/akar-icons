import React from 'react';
import PropTypes from 'prop-types';

const SoundOn = props => {
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
      <path d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 0 0 .707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 0 0 6.578 16H3c-.552 0-1-.466-1-1.041z"></path>
      <path d="M16 8.5c1.333 1.778 1.333 5.222 0 7"></path>
      <path d="M19 5c3.988 3.808 4.012 10.217 0 14"></path>
    </svg>
  );
};

SoundOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SoundOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SoundOn;
