import React from 'react';
import PropTypes from 'prop-types';

const Newspaper = props => {
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
      <path d="M5 21h12a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v13c0 1.657-.343 3-2 3z"></path>
      <path d="M3 10a2 2 0 0 1 2-2h2v10.5c0 1.38-.62 2.5-2 2.5s-2-1.12-2-2.5V10z"></path>
      <circle cx="12" cy="8" r="1"></circle>
      <path d="M11 14h6"></path>
      <path d="M11 17h3"></path>
    </svg>
  );
};

Newspaper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Newspaper.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Newspaper;
