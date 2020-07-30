import React from 'react';
import PropTypes from 'prop-types';

const BarChart = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a1 1 0 011 1v10a1 1 0 11-2 0V10a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3a1 1 0 011 1v16a1 1 0 11-2 0V4a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BarChart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BarChart;
