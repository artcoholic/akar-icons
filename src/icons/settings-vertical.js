import React from 'react';
import PropTypes from 'prop-types';

const SettingsVertical = props => {
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
      <path d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9"></path>
      <circle cx="19" cy="9" r="2" transform="rotate(90 19 9)"></circle>
      <circle cx="12" cy="17" r="2" transform="rotate(90 12 17)"></circle>
      <circle cx="5" cy="7" r="2" transform="rotate(90 5 7)"></circle>
    </svg>
  );
};

SettingsVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SettingsVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SettingsVertical;
