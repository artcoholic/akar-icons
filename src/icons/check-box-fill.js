import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7zm8.73 8.684a1 1 0 1 0-1.46-1.368l-3.083 3.29-1.523-1.353a1 1 0 0 0-1.328 1.494l2.25 2a1 1 0 0 0 1.393-.063l3.75-4z"
      ></path>
    </svg>
  );
};

CheckBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckBoxFill;
