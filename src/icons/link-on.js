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
      <path d="M15 8h3a4 4 0 014 4v0a4 4 0 01-4 4h-3m-6 0H6a4 4 0 01-4-4v0a4 4 0 014-4h3"></path>
      <path d="M7 12h10"></path>
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
