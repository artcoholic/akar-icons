import React from 'react';
import PropTypes from 'prop-types';

const Triangle = props => {
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
      <path d="M10.293 4.793c.78-1.277 2.634-1.277 3.414 0l7.433 12.164C21.955 18.29 20.996 20 19.434 20H4.566c-1.562 0-2.52-1.71-1.706-3.043l7.433-12.164z"></path>
    </svg>
  );
};

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Triangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Triangle;
