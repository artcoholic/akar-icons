import React from 'react';
import PropTypes from 'prop-types';

const BellOff = props => {
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
        d="M.293.293a1 1 0 011.414 0l4.779 4.779h.001l17.22 17.22a1 1 0 01-1.414 1.415L16.586 18H2a1 1 0 110-2 2 2 0 002-2V9c0-1.038.202-2.057.584-3.001L.293 1.707a1 1 0 010-1.414zm5.877 7.29L14.586 16H5.464A4 4 0 006 14V9c0-.481.058-.956.17-1.416z"
      ></path>
      <path d="M12.045 2.997a6 6 0 00-2.994.774 1 1 0 01-.982-1.742A8 8 0 0120 9.001V13a1 1 0 11-2 0V9a6.003 6.003 0 00-5.955-6.003z"></path>
      <path d="M9.768 20.135a1 1 0 011.367.363 1 1 0 001.73 0 1 1 0 011.73 1.004 3 3 0 01-5.19 0 1 1 0 01.363-1.367z"></path>
    </svg>
  );
};

BellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BellOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BellOff;
