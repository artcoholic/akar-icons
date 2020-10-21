import React from 'react';
import PropTypes from 'prop-types';

const MoreVertical = props => {
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
      <circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"></circle>
      <circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"></circle>
      <circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"></circle>
    </svg>
  );
};

MoreVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoreVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoreVertical;
