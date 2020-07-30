import React from 'react';
import PropTypes from 'prop-types';

const Cast = props => {
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
        d="M4 5a1 1 0 00-1 1v2a1 1 0 11-2 0V6a3 3 0 013-3h16a3 3 0 013 3v12a3 3 0 01-3 3h-6a1 1 0 110-2h6a1 1 0 001-1V6a1 1 0 00-1-1H4zm-2.994 6.94a1 1 0 011.105-.884 10 10 0 018.833 8.834 1 1 0 11-1.988.22 8 8 0 00-7.067-7.066 1 1 0 01-.883-1.104zm.014 3.96a1 1 0 011.18-.78 6 6 0 014.68 4.68 1 1 0 11-1.96.4 4 4 0 00-3.12-3.12 1 1 0 01-.78-1.18z"
      ></path>
    </svg>
  );
};

Cast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cast.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cast;
