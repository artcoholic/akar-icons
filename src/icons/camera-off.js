import React from 'react';
import PropTypes from 'prop-types';

const CameraOff = props => {
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
      <g clipPath="url(#clip0)" fillRule="evenodd" clipRule="evenodd">
        <path d="M.293.293a1 1 0 011.414 0l22 22a1 1 0 01-1.414 1.414l-22-22a1 1 0 010-1.414z"></path>
        <path d="M8 3a1 1 0 011-1h6a1 1 0 01.832.445L17.535 5H21a3 3 0 013 3v9.34a1 1 0 11-2 0V8a1 1 0 00-1-1h-4a1 1 0 01-.832-.445L14.465 4H9a1 1 0 01-1-1zM3 7a1 1 0 00-1 1v11a1 1 0 001 1h15.586l-3.262-3.262a4.997 4.997 0 01-5.043.986 5 5 0 01-2.019-8.048L5.586 7H3zm7.413 1.999L6.707 5.293A1 1 0 006 5H3a3 3 0 00-3 3v11a3 3 0 003 3h18a1 1 0 00.707-1.707l-5.706-5.706a1.339 1.339 0 00-.026-.027L10.44 9.025A.978.978 0 0010.413 9zm-.733 2.095a2.996 2.996 0 00-.523 2.946 3 3 0 004.749 1.28L9.68 11.094z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CameraOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CameraOff;
