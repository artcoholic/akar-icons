import React from 'react';
import PropTypes from 'prop-types';

const Cut = props => {
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
      <circle cx="7" cy="18" r="3"></circle>
      <path d="M15 15L7 3"></path>
      <path d="M9 15l3-4.5M17 3l-3 4.5"></path>
      <circle cx="17" cy="18" r="3"></circle>
    </svg>
  );
};

Cut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cut;
