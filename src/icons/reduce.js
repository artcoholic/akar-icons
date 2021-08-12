import React from 'react';
import PropTypes from 'prop-types';

const Reduce = props => {
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
      <path d="M14 10l7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"></path>
    </svg>
  );
};

Reduce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Reduce.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Reduce;
