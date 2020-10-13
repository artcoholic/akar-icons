import React from 'react';
import PropTypes from 'prop-types';

const Moon = props => {
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
      <path d="M21.953 15.695c.227-.54-.42-1-.964-.76a8.537 8.537 0 01-3.446.72c-4.65 0-8.42-3.694-8.42-8.25a8.09 8.09 0 011.262-4.345c.315-.497-.064-1.187-.641-1.04C5.288 3.157 2 7.125 2 11.847 2 17.454 6.639 22 12.362 22c4.333 0 8.044-2.606 9.591-6.305z"></path>
      <path d="M16.012 2.114c-.588-.393-1.29.309-.898.898l.7 1.05a2.59 2.59 0 010 2.876l-.7 1.05c-.393.589.31 1.291.899.898l1.05-.7a2.591 2.591 0 012.875 0l1.05.7c.588.393 1.29-.31.898-.899l-.7-1.05a2.59 2.59 0 010-2.874l.7-1.05c.393-.59-.31-1.292-.899-.898l-1.05.7a2.591 2.591 0 01-2.875 0l-1.05-.701z"></path>
    </svg>
  );
};

Moon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Moon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Moon;
