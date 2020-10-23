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
      id="Pin"
    >
      <path d="M14.857 14.857L22 22M2 10.571l1.873.209a6.061 6.061 0 015.31 5.027l.355 2.133a1 1 0 001.693.543l7.252-7.252a1 1 0 00-.543-1.693l-2.133-.356a6.061 6.061 0 01-5.027-5.309L10.57 2l-1.448.596a12 12 0 00-6.527 6.527L2 10.571z"></path>
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
