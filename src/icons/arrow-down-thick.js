import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownThick = props => {
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
      <path d="M12 21l9-7h-4.99L16 3H8v11H3l9 7z"></path>
    </svg>
  );
};

ArrowDownThick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownThick.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownThick;
