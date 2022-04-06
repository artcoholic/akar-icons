import React from 'react';
import PropTypes from 'prop-types';

const CircleCheck = props => {
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
      <path d="M8 12.5l3 3 5-6"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

CircleCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleCheck;
