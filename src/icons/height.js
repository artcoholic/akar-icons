import React from 'react';
import PropTypes from 'prop-types';

const Height = props => {
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
      id="Height"
    >
      <path d="M12 21V3"></path>
      <path d="M8 6l4-4 4 4"></path>
      <path d="M8 18l4 4 4-4"></path>
    </svg>
  );
};

Height.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Height.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Height;
