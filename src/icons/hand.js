import React from 'react';
import PropTypes from 'prop-types';

const Hand = props => {
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
      <path d="M20 16V8.5c0-.828-.641-1.5-1.48-1.5C18 7 17 7.3 17 8.5v-3c0-.828-.641-1.5-1.48-1.5-.507 0-1.52.3-1.52 1.5v-2c0-.828-.641-1.5-1.48-1.5-.84 0-1.52.672-1.52 1.5v2C11 4.3 10.007 4 9.5 4 8.66 4 8 4.691 8 5.52V14"></path>
      <path d="M11 5.5V11"></path>
      <path d="M14 5.5V11"></path>
      <path d="M17 5.5V11"></path>
      <path d="M20 16c0 4-3.134 6-7 6s-5.196-1-8.196-6l-1.571-2.605c-.536-.868-.107-1.994.881-2.314a1.657 1.657 0 0 1 1.818.552L8 14.033"></path>
    </svg>
  );
};

Hand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Hand.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Hand;
