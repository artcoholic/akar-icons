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
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
      <path d="M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M21 15l-5-5L5 21"></path>
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
