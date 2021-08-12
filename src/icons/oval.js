import React from 'react';
import PropTypes from 'prop-types';

const Oval = props => {
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
      <ellipse cx="12" cy="12" rx="8" ry="10"></ellipse>
    </svg>
  );
};

Oval.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Oval.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Oval;
