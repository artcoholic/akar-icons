import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
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
      <ellipse cx="12" cy="5" rx="9" ry="2"></ellipse>
      <path d="M3 5c0 2.23 3.871 6.674 5.856 8.805A4.197 4.197 0 0 1 10 16.657V22l4-2v-3.343c0-1.061.421-2.075 1.144-2.852C17.13 11.674 21 7.231 21 5"></path>
    </svg>
  );
};

Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Filter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Filter;
