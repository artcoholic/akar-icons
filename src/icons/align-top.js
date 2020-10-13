import React from 'react';
import PropTypes from 'prop-types';

const AlignTop = props => {
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
      <path d="M22 2H2"></path>
      <path d="M9 8v14m6-14v7"></path>
    </svg>
  );
};

AlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignTop;
