import React from 'react';
import PropTypes from 'prop-types';

const History = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M4.266 16.06a8.923 8.923 0 0 0 3.915 3.978 8.706 8.706 0 0 0 5.471.832 8.795 8.795 0 0 0 4.887-2.64 9.067 9.067 0 0 0 2.388-5.079 9.135 9.135 0 0 0-1.044-5.53 8.903 8.903 0 0 0-4.069-3.815 8.7 8.7 0 0 0-5.5-.608c-1.85.401-3.366 1.313-4.62 2.755-.151.16-.735.806-1.22 1.781M7.5 8l-3.609.72L3 5m9 4v4l3 2"></path>
    </svg>
  );
};

History.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default History;
