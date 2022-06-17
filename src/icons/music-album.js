import React from 'react';
import PropTypes from 'prop-types';

const MusicAlbum = props => {
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
      <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6z"></path>
      <path d="M9 16.5V8.78a1 1 0 0 1 .757-.97l6-1.5A1 1 0 0 1 17 7.28V15"></path>
      <path d="M9 11l8-2"></path>
      <circle cx="7.5" cy="16.5" r="1.5"></circle>
      <circle cx="15.5" cy="15.5" r="1.5"></circle>
    </svg>
  );
};

MusicAlbum.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MusicAlbum.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MusicAlbum;
