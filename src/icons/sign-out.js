import React from 'react';
import PropTypes from 'prop-types';

const SignOut = props => {
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
      id="SignOut"
    >
      <path d="M13 12h9m0 0l-3.333-4M22 12l-3.333 4"></path>
      <path d="M14 7V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2v-1"></path>
    </svg>
  );
};

SignOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SignOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SignOut;
