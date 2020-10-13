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
    >
      <path d="M4.343 15.657L17 3a2.828 2.828 0 114 4L8.343 19.657A8 8 0 012.686 22H2v-.686a8 8 0 012.343-5.657z"></path>
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
