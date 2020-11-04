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
      id="Fire"
    >
      <path d="M12 22c-4.418 0-8-2.582-8-7v-.088C4 12.794 5.189 11.1 7 10c1.732-1.052 2.757-2.99 2.5-5L9 2l1.854.795a16.705 16.705 0 017.924 7.066A9.277 9.277 0 0120 14.464V15c0 1.562-.448 2.895-1.222 3.965"></path>
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
