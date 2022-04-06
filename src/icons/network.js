import React from 'react';
import PropTypes from 'prop-types';

const Network = props => {
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
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <path d="M15.408 6.512l-6.814 3.975m6.814 7.001l-6.814-3.975"></path>
    </svg>
  );
};

Network.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Network.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Network;
