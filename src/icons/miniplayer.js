import React from 'react';
import PropTypes from 'prop-types';

const Miniplayer = props => {
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
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <rect x="13" y="13" width="9" height="7" rx="2"></rect>
    </svg>
  );
};

Miniplayer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Miniplayer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Miniplayer;
