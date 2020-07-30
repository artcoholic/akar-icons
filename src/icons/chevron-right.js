import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = props => {
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
        d="M8.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronRight;
