import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = props => {
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
        d="M11.293 8.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6z"
      ></path>
    </svg>
  );
};

ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronUp;
