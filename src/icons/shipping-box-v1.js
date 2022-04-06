import React from 'react';
import PropTypes from 'prop-types';

const ShippingBoxV1 = props => {
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
      <path d="M11.029 2.54a2 2 0 0 1 1.942 0l7.515 4.174a1 1 0 0 1 .514.874v8.235a2 2 0 0 1-1.029 1.748l-7 3.89a2 2 0 0 1-1.942 0l-7-3.89A2 2 0 0 1 3 15.824V7.588a1 1 0 0 1 .514-.874L11.03 2.54z"></path>
      <path d="M3 7l9 5m0 0l9-5m-9 5v9.5"></path>
      <path d="M7.5 9.5l9-5"></path>
      <path d="M6 12.328L9 14"></path>
    </svg>
  );
};

ShippingBoxV1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShippingBoxV1.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShippingBoxV1;
