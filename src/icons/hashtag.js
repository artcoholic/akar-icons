import React from 'react';
import PropTypes from 'prop-types';

const Hashtag = props => {
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
      <path d="M10 3L6 21"></path>
      <path d="M18 3l-4 18"></path>
      <path d="M4 8h17"></path>
      <path d="M3 16h17"></path>
    </svg>
  );
};

Hashtag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Hashtag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Hashtag;
