import React from 'react';
import PropTypes from 'prop-types';

const Video = props => {
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
      <rect x="2" y="4" width="20" height="16" rx="4"></rect>
      <path d="M15 12l-5-3v6l5-3z"></path>
    </svg>
  );
};

Video.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Video.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Video;
