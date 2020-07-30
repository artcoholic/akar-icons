import React from 'react';
import PropTypes from 'prop-types';

const Briefcase = props => {
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
        d="M4 8a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1H4zM1 9a3 3 0 013-3h16a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V9z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.879 2.879A3 3 0 0110 2h4a3 3 0 013 3v16a1 1 0 11-2 0V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v16a1 1 0 11-2 0V5a3 3 0 01.879-2.121z"
      ></path>
    </svg>
  );
};

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Briefcase.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Briefcase;
