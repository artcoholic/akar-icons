import React from 'react';
import PropTypes from 'prop-types';

const Width = props => {
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
      <path d="M22 12H2m20 0l-4 4m4-4l-4-4M2 12l4 4m-4-4l4-4"></path>
    </svg>
  );
};

Width.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Width.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Width;
