import React from 'react';
import PropTypes from 'prop-types';

const ToggleOn = props => {
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
      <rect x="2" y="7" width="20" height="10" rx="5"></rect>
      <circle cx="17" cy="12" r="5"></circle>
    </svg>
  );
};

ToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ToggleOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ToggleOn;
