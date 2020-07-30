import React from 'react';
import PropTypes from 'prop-types';

const Camera = props => {
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
        d="M8.168 2.445A1 1 0 019 2h6a1 1 0 01.832.445L17.535 5H21a3 3 0 013 3v11a3 3 0 01-3 3H3a3 3 0 01-3-3V8a3 3 0 013-3h3.465l1.703-2.555zM9.535 4L7.832 6.555A1 1 0 017 7H3a1 1 0 00-1 1v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1h-4a1 1 0 01-.832-.445L14.465 4h-4.93z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
      ></path>
    </svg>
  );
};

Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Camera.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Camera;
