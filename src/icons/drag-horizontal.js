import React from 'react';
import PropTypes from 'prop-types';

const DragHorizontal = props => {
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
      id="DragHorizontal"
    >
      <circle cx="20" cy="8" r="1" transform="rotate(-180 20 8)"></circle>
      <circle cx="20" cy="16" r="1" transform="rotate(-180 20 16)"></circle>
      <circle cx="12" cy="8" r="1" transform="rotate(-180 12 8)"></circle>
      <circle cx="12" cy="16" r="1" transform="rotate(-180 12 16)"></circle>
      <circle cx="4" cy="8" r="1" transform="rotate(-180 4 8)"></circle>
      <circle cx="4" cy="16" r="1" transform="rotate(-180 4 16)"></circle>
    </svg>
  );
};

DragHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DragHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default DragHorizontal;
