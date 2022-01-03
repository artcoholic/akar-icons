import React from 'react';
import PropTypes from 'prop-types';

const SidebarLeft = props => {
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
      <rect x="2" y="3" width="20" height="18" rx="2"></rect>
      <path d="M9 3v18"></path>
    </svg>
  );
};

SidebarLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SidebarLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SidebarLeft;
