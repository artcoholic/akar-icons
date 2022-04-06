import React from 'react';
import PropTypes from 'prop-types';

const PentagonFill = props => {
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
        d="M10.126 2.219a3 3 0 0 1 3.748 0l7.63 6.104a3 3 0 0 1 .945 3.367l-3.03 8.335A3 3 0 0 1 16.599 22H7.401a3 3 0 0 1-2.82-1.975l-3.03-8.334a3 3 0 0 1 .945-3.368l7.63-6.104z"
      ></path>
    </svg>
  );
};

PentagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PentagonFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PentagonFill;
