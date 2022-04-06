import React from 'react';
import PropTypes from 'prop-types';

const PointerLeftFill = props => {
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
        d="M6.6 4.2A3 3 0 0 1 9 3h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-2.4-1.2l-4.5-6a3 3 0 0 1 0-3.6l4.5-6z"
      ></path>
    </svg>
  );
};

PointerLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PointerLeftFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PointerLeftFill;
