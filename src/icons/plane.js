import React from 'react';
import PropTypes from 'prop-types';

const Plane = props => {
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
      <path d="M4 11l-2 4 3.408 1.363a4 4 0 0 1 2.229 2.229L9 22l4-2-1.21-2.42a2 2 0 0 1 .679-2.56L14 14l4 7 3-4-2.29-7.469.715-.714c1.412-1.412 2.71-3.682 1.075-5.317-1.635-1.635-3.91-.34-5.316 1.077l-.72.708L7 3 3 6l7 4-1.02 1.531a2 2 0 0 1-2.56.68L4 11z"></path>
    </svg>
  );
};

Plane.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Plane.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Plane;
