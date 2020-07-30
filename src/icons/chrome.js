import React from 'react';
import PropTypes from 'prop-types';

const Chrome = props => {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8a1 1 0 011-1h9.17a1 1 0 110 2H12a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.45 5.194a1 1 0 011.366.366l4.59 7.94a1 1 0 01-1.732 1l-4.59-7.94a1 1 0 01.366-1.366z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.96 13.134a1 1 0 01.366 1.366l-4.58 7.94a1 1 0 11-1.732-1l4.58-7.94a1 1 0 011.366-.366z"
      ></path>
    </svg>
  );
};

Chrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Chrome.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Chrome;
