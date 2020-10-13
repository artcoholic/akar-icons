import React from 'react';
import PropTypes from 'prop-types';

const Paper = props => {
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
      <path d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.375 2H6a2 2 0 00-2 2z"></path>
      <path d="M14 8V2l6 6h-6z"></path>
    </svg>
  );
};

Paper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Paper.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Paper;
