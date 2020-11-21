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
      id="Radish"
    >
      <path d="M15.688 10H8.326c-2.188 0-4.024 1.415-4.261 3.282-.325 2.56.529 4.105 3.634 5.128 1.394.46 2.579 1.464 3.01 2.868l.223.722.095-.082a8 8 0 012.175-1.331l1.921-.789c3.286-1.348 5.22-3.408 4.826-6.516C19.712 11.415 17.875 10 15.688 10z"></path>
      <path d="M11.964 6.97s-3.075.306-4.685-1.035C5.669 4.593 6.036 2.03 6.036 2.03s3.075-.306 4.686 1.035c1.61 1.342 1.242 3.905 1.242 3.905z"></path>
      <path d="M12.036 6.97s3.075.306 4.685-1.035c1.61-1.342 1.243-3.905 1.243-3.905s-3.075-.306-4.685 1.035c-1.61 1.342-1.243 3.905-1.243 3.905z"></path>
      <path d="M9.196 15.98a1 1 0 00-.392-1.96l.392 1.96zM6 17.5a88.56 88.56 0 01.97.245v.001l-.002.004v.004l-.001.001a1.726 1.726 0 01.066-.173c.059-.134.16-.326.319-.53.309-.398.858-.874 1.844-1.071l-.392-1.962c-1.514.303-2.465 1.076-3.03 1.805a4.54 4.54 0 00-.572.953 3.714 3.714 0 00-.17.47l-.001.006a.051.051 0 010 .003c-.001 0-.001.002.969.244z"></path>
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
