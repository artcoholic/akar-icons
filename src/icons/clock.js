import React from 'react';
import PropTypes from 'prop-types';

const Clock = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"></path>
    </svg>
  );
};

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clock;
