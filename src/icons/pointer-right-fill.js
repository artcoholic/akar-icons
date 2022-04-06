import React from 'react';
import PropTypes from 'prop-types';

const PointerRightFill = props => {
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
        d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6l-4.5-6z"
      ></path>
    </svg>
  );
};

PointerRightFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PointerRightFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PointerRightFill;
