import React from 'react';
import PropTypes from 'prop-types';

const Pin = props => {
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
      <path d="M14.857 14.857L22 22M2 10.571L10.571 2l.209 1.873a6.061 6.061 0 005.027 5.31l2.133.355a1 1 0 01.543 1.693l-7.252 7.252a1 1 0 01-1.693-.543l-.356-2.133a6.061 6.061 0 00-5.309-5.027L2 10.57z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pin;
