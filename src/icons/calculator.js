import React from 'react';
import PropTypes from 'prop-types';

const Calculator = props => {
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
      <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5H2V6z"></path>
      <path d="M18.5 16.5h-3"></path>
      <path d="M12 11h10v7a4 4 0 0 1-4 4h-6V11z"></path>
      <path d="M12 11H2v7a4 4 0 0 0 4 4h6V11z"></path>
      <path d="M5.5 18L7 16.5m0 0L8.5 15M7 16.5L8.5 18M7 16.5L5.5 15"></path>
    </svg>
  );
};

Calculator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Calculator.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Calculator;
