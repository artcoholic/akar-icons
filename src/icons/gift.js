import React from 'react';
import PropTypes from 'prop-types';

const Gift = props => {
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
      <rect x="3" y="8" width="18" height="14" rx="2"></rect>
      <path d="M12 5a3 3 0 1 0-3 3"></path>
      <path d="M15 8a3 3 0 1 0-3-3"></path>
      <path d="M12 5v17"></path>
      <path d="M21 15H3"></path>
    </svg>
  );
};

Gift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Gift.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Gift;
