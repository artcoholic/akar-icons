import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 18A1.5 1.5 0 005 19.5a1 1 0 11-2 0A3.5 3.5 0 016.5 16H20a1 1 0 110 2H6.5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 3A1.5 1.5 0 005 4.5v15A1.5 1.5 0 006.5 21H19V3H6.5zm0-2H20a1 1 0 011 1v20a1 1 0 01-1 1H6.5A3.5 3.5 0 013 19.5v-15A3.5 3.5 0 016.5 1z"
      ></path>
    </svg>
  );
};

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Book.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Book;
