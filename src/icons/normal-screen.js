import React from 'react';
import PropTypes from 'prop-types';

const NormalScreen = props => {
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
      <path d="M7 2v5H2"></path>
      <path d="M17 2v5h5"></path>
      <path d="M2 17h5v5"></path>
      <path d="M22 17h-5v5"></path>
    </svg>
  );
};

NormalScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NormalScreen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NormalScreen;
