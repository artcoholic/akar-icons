import React from 'react';
import PropTypes from 'prop-types';

const AtSign = props => {
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
        d="M14.5 1.288a11 11 0 104.188 19.446 1 1 0 10-1.216-1.588A9 9 0 1121 12v1a2 2 0 01-4 0V8a1 1 0 00-2 0 5 5 0 10.74 7.319A3.996 3.996 0 0019 17a4 4 0 004-4v-1a11 11 0 00-8.5-10.712zM9 12a3 3 0 116 0 3 3 0 01-6 0z"
      ></path>
    </svg>
  );
};

AtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AtSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AtSign;
