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
      id="Command"
    >
      <path d="M9.3 17.85a3.15 3.15 0 11-3.15-3.15h11.7a3.15 3.15 0 11-3.15 3.15V6.15a3.15 3.15 0 113.15 3.15H6.15A3.15 3.15 0 119.3 6.15v11.7z"></path>
    </svg>
  );
};

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Command.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Command;
