import React from 'react';
import PropTypes from 'prop-types';

const Inbox = props => {
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
      <path d="M3.304 6.132A4 4 0 0 1 7.209 3h9.582a4 4 0 0 1 3.905 3.132l.147.662a23.997 23.997 0 0 1 0 10.412l-.147.662A4 4 0 0 1 16.791 21H7.21a4 4 0 0 1-3.905-3.132l-.147-.662a24 24 0 0 1 0-10.412l.147-.662z"></path>
      <path d="M2.5 13h6.338c0 1 .973 3 3.405 3 2.433 0 3.406-2 3.406-3H21.5"></path>
    </svg>
  );
};

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Inbox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Inbox;
