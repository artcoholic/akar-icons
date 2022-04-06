import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpThick = props => {
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
      <path d="M12 3l9 7h-4.99L16 21H8V10H3l9-7z"></path>
    </svg>
  );
};

ArrowUpThick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpThick.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpThick;
