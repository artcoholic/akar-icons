import React from 'react';
import PropTypes from 'prop-types';

const StatisticDown = props => {
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
      <path d="M7 9l4 4 4-4 6 6"></path>
      <path d="M18 15h3v-3"></path>
    </svg>
  );
};

StatisticDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StatisticDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StatisticDown;
