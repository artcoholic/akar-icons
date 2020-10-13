import React from 'react';
import PropTypes from 'prop-types';

const Command = props => {
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
      <path d="M9 18.5A3.5 3.5 0 115.5 15h13a3.5 3.5 0 11-3.5 3.5v-13A3.5 3.5 0 1118.5 9h-13A3.5 3.5 0 119 5.5v13z"></path>
    </svg>
  );
};

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Command.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Command;
