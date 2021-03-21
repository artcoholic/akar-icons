import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
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
      id="Image"
    >
      <path d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z"></path>
      <circle cx="8.5" cy="8.5" r="2.5"></circle>
      <path d="M14.526 12.621L6 22h12.27A3.73 3.73 0 0022 18.27c0-.466-.175-.915-.49-1.26l-4.03-4.395a2 2 0 00-2.954.006z"></path>
    </svg>
  );
};

Image.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Image.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Image;
