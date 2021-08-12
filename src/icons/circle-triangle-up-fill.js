import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleUpFill = props => {
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8.8 14a.809.809 0 0 1-.705-.396.71.71 0 0 1 .04-.77l3.2-4.5A.815.815 0 0 1 12 8c.268 0 .517.125.666.334l3.2 4.5a.71.71 0 0 1 .04.77.809.809 0 0 1-.706.396H8.8z"
      ></path>
    </svg>
  );
};

CircleTriangleUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleTriangleUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleTriangleUpFill;
