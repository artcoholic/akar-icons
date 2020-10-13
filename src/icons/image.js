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
    >
      <rect x="2" y="3" width="20" height="18" rx="2"></rect>
      <circle cx="7.5" cy="8.5" r="2.5"></circle>
      <path d="M14.526 10.608L5 21h15a2 2 0 002-2v-2.677a2 2 0 00-.526-1.351l-4-4.364a2 2 0 00-2.948 0z"></path>
    </svg>
  );
};

Image.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Image.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Image;
