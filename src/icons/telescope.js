import React from 'react';
import PropTypes from 'prop-types';

const Telescope = props => {
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
      <path d="M7 21l6-8 8 8"></path>
      <path d="M5.228 7.303l13.532-5.06a1 1 0 0 1 1.108.285l.19.22A8 8 0 0 1 22 7.973v.616a1 1 0 0 1-.65.937l-13.536 5.06-2.586-7.283z"></path>
      <path d="M2.66 11.371a2 2 0 0 1 1.193-2.545l1.694-.624 1.944 5.473-1.64.612a2 2 0 0 1-2.585-1.205l-.606-1.711z"></path>
      <path d="M13 13v9"></path>
    </svg>
  );
};

Telescope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Telescope.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Telescope;
