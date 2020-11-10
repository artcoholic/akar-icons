import React from 'react';
import PropTypes from 'prop-types';

const Eye = props => {
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
      id="Eye"
    >
      <path d="M20.451 9.969a3.09 3.09 0 010 4.062C18.678 16.098 15.556 19 12 19c-3.556 0-6.678-2.902-8.451-4.969a3.09 3.09 0 010-4.062C5.322 7.902 8.444 5 12 5c3.556 0 6.678 2.902 8.451 4.969z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};

Eye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Eye.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Eye;
