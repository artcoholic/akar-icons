import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleDownFill = props => {
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-3.2 9a.809.809 0 0 0-.705.396.71.71 0 0 0 .04.77l3.2 4.5A.815.815 0 0 0 12 16a.815.815 0 0 0 .666-.334l3.2-4.5a.71.71 0 0 0 .04-.77A.809.809 0 0 0 15.2 10H8.8z"
      ></path>
    </svg>
  );
};

CircleTriangleDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleTriangleDownFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleTriangleDownFill;
