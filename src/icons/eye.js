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
      <path d="M22 12s-4.477 7-10 7-10-7-10-7 4.477-7 10-7 10 7 10 7z"></path>
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
