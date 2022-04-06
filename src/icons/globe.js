import React from 'react';
import PropTypes from 'prop-types';

const Globe = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(90 12 12)"
      ></ellipse>
      <path d="M2 12h20"></path>
    </svg>
  );
};

Globe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Globe.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Globe;
