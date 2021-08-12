import React from 'react';
import PropTypes from 'prop-types';

const Radish = props => {
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
      <path d="M16 10H8c-2.188 0-3.698 1.415-3.935 3.282-.325 2.56.529 4.105 3.634 5.128 1.394.46 2.579 1.464 3.01 2.868l.223.722.095-.082a8 8 0 0 1 2.175-1.331l1.921-.789c3.286-1.348 5.22-3.408 4.826-6.516C19.712 11.415 18.188 10 16 10z"></path>
      <path d="M11.964 6.97s-3.075.306-4.685-1.035C5.669 4.593 6.036 2.03 6.036 2.03s3.075-.306 4.686 1.035c1.61 1.342 1.242 3.905 1.242 3.905z"></path>
      <path d="M12.036 6.97s3.075.306 4.685-1.035c1.61-1.342 1.243-3.905 1.243-3.905s-3.075-.306-4.685 1.035c-1.61 1.342-1.243 3.905-1.243 3.905z"></path>
      <path d="M19 11.5c-.5 1-3.134 1.5-7 1.5s-6.5-.5-7-1.5"></path>
    </svg>
  );
};

Radish.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Radish.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Radish;
