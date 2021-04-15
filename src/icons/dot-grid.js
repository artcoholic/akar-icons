import React from 'react';
import PropTypes from 'prop-types';

const DotGrid = props => {
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
      id="DotGrid"
    >
      <circle cx="4" cy="4" r="1" transform="rotate(90 4 4)"></circle>
      <circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"></circle>
      <circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"></circle>
      <circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"></circle>
      <circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"></circle>
      <circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"></circle>
      <circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"></circle>
      <circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"></circle>
      <circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"></circle>
    </svg>
  );
};

DotGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DotGrid.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default DotGrid;
