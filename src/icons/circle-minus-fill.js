import React from 'react';
import PropTypes from 'prop-types';

const CircleMinusFill = props => {
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"
      ></path>
    </svg>
  );
};

CircleMinusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleMinusFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleMinusFill;
