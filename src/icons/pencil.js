import React from 'react';
import PropTypes from 'prop-types';

const Pencil = props => {
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
      id="Pencil"
    >
      <path d="M4.333 16.048L16.57 3.81a2.56 2.56 0 013.62 3.619L7.951 19.667a2 2 0 01-1.022.547L3 21l.786-3.93a2 2 0 01.547-1.022z"></path>
      <path d="M4.5 16.5l3 3"></path>
      <path d="M14.5 6.5l3 3"></path>
    </svg>
  );
};

Pencil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pencil.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pencil;
