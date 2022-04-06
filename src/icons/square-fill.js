import React from 'react';
import PropTypes from 'prop-types';

const SquareFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <rect x="2" y="2" width="20" height="20" rx="2"></rect>
    </svg>
  );
};

SquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SquareFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SquareFill;
