import React from 'react';
import PropTypes from 'prop-types';

const Schedule = props => {
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
      id="Schedule"
    >
      <path d="M9 20H4a2 2 0 01-2-2V5a2 2 0 012-2h15a2 2 0 012 2v5"></path>
      <path d="M8 2v2"></path>
      <path d="M15 2v2"></path>
      <path d="M2 8h19"></path>
      <path d="M17 15v2.143L18 18"></path>
      <circle cx="17" cy="17" r="5"></circle>
    </svg>
  );
};

Schedule.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Schedule.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Schedule;
