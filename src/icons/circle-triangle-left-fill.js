import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleLeftFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm2 7.8a.809.809 0 0 0-.396-.705.71.71 0 0 0-.77.04l-4.5 3.2A.815.815 0 0 0 8 12c0 .268.125.517.334.666l4.5 3.2a.71.71 0 0 0 .77.04A.809.809 0 0 0 14 15.2V8.8z"
      ></path>
    </svg>
  );
};

CircleTriangleLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleTriangleLeftFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleTriangleLeftFill;
