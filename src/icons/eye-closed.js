import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = props => {
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
      <path d="M2 10s3.5 4 10 4 10-4 10-4"></path>
      <path d="M4 11.645L2 14"></path>
      <path d="M22 14l-1.996-2.352"></path>
      <path d="M8.914 13.68L8 16.5"></path>
      <path d="M15.063 13.688L16 16.5"></path>
    </svg>
  );
};

EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeClosed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EyeClosed;
