import React from 'react';
import PropTypes from 'prop-types';

const Calendar = props => {
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
      <rect x="2" y="4" width="20" height="18" rx="4"></rect>
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <path d="M2 10h20"></path>
    </svg>
  );
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Calendar;
