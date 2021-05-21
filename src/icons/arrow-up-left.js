import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = props => {
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
      id="ArrowUpLeft"
    >
      <path d="M6 6l12 12M16 6H6v10"></path>
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default ArrowUpLeft;
