import React from 'react';
import PropTypes from 'prop-types';

const LinkOn = props => {
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
      id="LinkOn"
    >
      <path d="M15 6h1a6 6 0 016 6v0a6 6 0 01-6 6h-1m-6 0H8a6 6 0 01-6-6v0a6 6 0 016-6h1"></path>
      <path d="M9 12h6"></path>
    </svg>
  );
};

LinkOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkOn;
