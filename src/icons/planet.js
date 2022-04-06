import React from 'react';
import PropTypes from 'prop-types';

const Planet = props => {
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
      <circle cx="12" cy="12" r="8"></circle>
      <path d="M8.399 4.849C5.372 2.582 2.972 1.489 2.23 2.23c-1.174 1.174 2.248 6.5 7.643 11.895 5.396 5.395 10.722 8.817 11.895 7.643.431-.43.243-1.421-.435-2.769"></path>
    </svg>
  );
};

Planet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Planet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Planet;
