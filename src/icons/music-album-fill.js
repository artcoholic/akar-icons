import React from 'react';
import PropTypes from 'prop-types';

const MusicAlbumFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5c0-2.21 1.792-4 4.002-4h13.996C21.208 1 23 2.79 23 5v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5zm19 7a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      ></path>
    </svg>
  );
};

MusicAlbumFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MusicAlbumFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MusicAlbumFill;
