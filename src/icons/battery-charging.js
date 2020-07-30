import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharging = props => {
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
        d="M11.832 6.555a1 1 0 00-1.664-1.11l-4 6A1 1 0 007 13h4.132l-2.964 4.445a1 1 0 101.664 1.11l4-6A1 1 0 0013 11H8.869l2.963-4.445zM3 7a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 110 2H3a3 3 0 01-3-3V8a3 3 0 013-3h3.19a1 1 0 010 2H3zm11-1a1 1 0 011-1h2a3 3 0 013 3v8a3 3 0 01-3 3h-3.19a1 1 0 110-2H17a1 1 0 001-1V8a1 1 0 00-1-1h-2a1 1 0 01-1-1zm9 4a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryCharging;
