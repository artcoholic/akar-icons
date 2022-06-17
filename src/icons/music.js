import React from 'react';
import PropTypes from 'prop-types';

const Music = props => {
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
      <path d="M8 18V5.716a2 2 0 0 1 1.696-1.977l9-1.385A2 2 0 0 1 21 4.331V16"></path>
      <path d="M8 9l13-2"></path>
      <path d="M8 18a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2z"></path>
      <path d="M21 16a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2z"></path>
    </svg>
  );
};

Music.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Music.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Music;
