import React from 'react';
import PropTypes from 'prop-types';

const DragVertical = props => {
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
      id="DragVertical"
    >
      <circle cx="8" cy="4" r="1" transform="rotate(90 8 4)"></circle>
      <circle cx="16" cy="4" r="1" transform="rotate(90 16 4)"></circle>
      <circle cx="8" cy="12" r="1" transform="rotate(90 8 12)"></circle>
      <circle cx="16" cy="12" r="1" transform="rotate(90 16 12)"></circle>
      <circle cx="8" cy="20" r="1" transform="rotate(90 8 20)"></circle>
      <circle cx="16" cy="20" r="1" transform="rotate(90 16 20)"></circle>
    </svg>
  );
};

DragVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DragVertical.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default DragVertical;
