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
      id="KeyCap"
    >
      <path d="M7 3s3 .5 5 .5 5-.5 5-.5l.91 8.197a.95.95 0 0 1-.685 1.032C16.141 12.524 14.07 13 12 13s-4.14-.476-5.225-.771a.95.95 0 0 1-.686-1.032L7 3z"></path>
      <path d="M3.869 8.147l-.862 10.294c-.03.366.04.733.205 1.06l.197.393A2.01 2.01 0 0 0 5.206 21h13.588a2.01 2.01 0 0 0 1.797-1.106l.197-.392c.165-.328.236-.695.205-1.06l-.862-10.295a3.99 3.99 0 0 0-.79-2.068L17 3s-3 .5-5 .5S6.978 3 6.978 3l-2.32 3.08a3.99 3.99 0 0 0-.79 2.067z"></path>
      <path d="M6 12l-3 7M18 12l3 7"></path>
    </svg>
  );
};

KeyCap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

KeyCap.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default KeyCap;
