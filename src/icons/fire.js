import React from 'react';
import PropTypes from 'prop-types';

const Fire = props => {
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
      <path d="M12 22c-4.97 0-9-2.582-9-7v-.088C3 12.794 4.338 11.1 6.375 10c1.949-1.052 3.101-2.99 2.813-5l-.563-3 2.086.795c3.757 1.43 6.886 3.912 8.914 7.066A8.495 8.495 0 0 1 21 14.464V15c0 1.562-.504 2.895-1.375 3.965"></path>
      <path d="M12 22c-1.657 0-3-1.433-3-3.2 0-1.4 1.016-2.521 1.91-3.548L12 14l1.09 1.252C13.984 16.28 15 17.4 15 18.8c0 1.767-1.343 3.2-3 3.2z"></path>
    </svg>
  );
};

Fire.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Fire.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Fire;
