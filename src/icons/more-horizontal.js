import React from 'react';
import PropTypes from 'prop-types';

const MoreHorizontal = props => {
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
      id="MoreHorizontal"
    >
      <circle cx="4" cy="12" r="1"></circle>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="20" cy="12" r="1"></circle>
    </svg>
  );
};

MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoreHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default MoreHorizontal;
