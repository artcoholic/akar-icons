import React from 'react';
import PropTypes from 'prop-types';

const TriangleAlert = props => {
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
      <path d="M12 9v5"></path>
      <path d="M12 17.5v.5"></path>
      <path d="M2.232 19.016L10.35 3.052c.713-1.403 2.59-1.403 3.302 0l8.117 15.964C22.45 20.36 21.544 22 20.116 22H3.883c-1.427 0-2.334-1.64-1.65-2.984z"></path>
    </svg>
  );
};

TriangleAlert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TriangleAlert.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TriangleAlert;
