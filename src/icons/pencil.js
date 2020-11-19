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
      <path d="M3.428 16.572L17 3a2.828 2.828 0 114 4L7.428 20.572a2 2 0 01-1.022.547L2 22l.881-4.406a2 2 0 01.547-1.022z"></path>
      <path d="M4 16l4 4"></path>
      <path d="M14 6l4 4"></path>
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
