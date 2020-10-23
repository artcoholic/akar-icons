import React from 'react';
import PropTypes from 'prop-types';

const Ticket = props => {
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
      id="Ticket"
    >
      <path d="M8 4a2.828 2.828 0 11-4 4l-2 2 12 12 2-2a2.828 2.828 0 114-4l2-2L10 2 8 4z"></path>
    </svg>
  );
};

Ticket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Ticket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Ticket;
