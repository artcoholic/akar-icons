import React from 'react';
import PropTypes from 'prop-types';

const UnsplashFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
        d="M8.25 2h7.5v5.625h-7.5V2zM2 10.75h6.268v5.675h7.517V10.75H22V22H2V10.75z"
      ></path>
    </svg>
  );
};

UnsplashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default UnsplashFill;
