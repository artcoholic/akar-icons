import React from 'react';
import PropTypes from 'prop-types';

const Alarm = props => {
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
      <circle cx="12" cy="13" r="9"></circle>
      <path d="M15.5 9.5L12 13"></path>
      <path d="M19 19l1 3"></path>
      <path d="M5 19l-1 3"></path>
      <path d="M2 5l3-3"></path>
      <path d="M19 2l3 3"></path>
      <path d="M12 4V2"></path>
    </svg>
  );
};

Alarm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Alarm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Alarm;
