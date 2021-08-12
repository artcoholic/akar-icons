import React from 'react';
import PropTypes from 'prop-types';

const Stop = props => {
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
      <path d="M8 2L2 8.156V16l6 6h8l6-6V8.156L16 2H8z"></path>
      <path d="M16 12H8"></path>
    </svg>
  );
};

Stop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Stop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Stop;
