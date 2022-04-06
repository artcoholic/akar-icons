import React from 'react';
import PropTypes from 'prop-types';

const KeyCap = props => {
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
      <path d="M7 3s3 .5 5 .5 5-.5 5-.5l1 9s-3 1-6 1-6-1-6-1l1-9z"></path>
      <path d="M3.869 8.147l-.862 10.294c-.03.366.04.733.205 1.06l.197.393A2.01 2.01 0 0 0 5.206 21h13.588a2.01 2.01 0 0 0 1.797-1.106l.197-.392c.165-.328.236-.695.205-1.06l-.862-10.295a3.99 3.99 0 0 0-.79-2.068L17 3s-3 .5-5 .5S6.978 3 6.978 3l-2.32 3.08a3.99 3.99 0 0 0-.79 2.067z"></path>
      <path d="M6 12l-2.5 8M18 12l2.5 8"></path>
    </svg>
  );
};

KeyCap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

KeyCap.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default KeyCap;
