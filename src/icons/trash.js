import React from 'react';
import PropTypes from 'prop-types';

const Trash = props => {
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
      <path d="M8 4a2 2 0 012-2h4a2 2 0 012 2v1H8V4z"></path>
      <path d="M2 5h20"></path>
      <path d="M4 8l.867 12.142A2 2 0 006.862 22h10.276a2 2 0 001.995-1.858L20 8"></path>
      <path d="M8 9l.5 9.5"></path>
      <path d="M16 9l-.5 9.5"></path>
      <path d="M12 9v9.5"></path>
    </svg>
  );
};

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Trash;
