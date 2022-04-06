import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = props => {
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
      <rect x="3" y="3" width="18" height="18" rx="4"></rect>
      <path d="M9 12l2.25 2L15 10"></path>
    </svg>
  );
};

CheckBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckBox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckBox;
