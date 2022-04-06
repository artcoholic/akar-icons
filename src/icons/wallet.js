import React from 'react';
import PropTypes from 'prop-types';

const Wallet = props => {
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
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"></path>
      <path d="M2 8h20"></path>
      <path d="M2 12h7c0 1 .6 3 3 3s3-2 3-3h7"></path>
    </svg>
  );
};

Wallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Wallet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Wallet;
