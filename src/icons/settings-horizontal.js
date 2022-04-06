import React from 'react';
import PropTypes from 'prop-types';

const SettingsHorizontal = props => {
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
      <path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"></path>
      <circle cx="9" cy="5" r="2"></circle>
      <circle cx="17" cy="12" r="2"></circle>
      <circle cx="7" cy="19" r="2"></circle>
    </svg>
  );
};

SettingsHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SettingsHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SettingsHorizontal;
