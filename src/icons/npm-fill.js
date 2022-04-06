import React from 'react';
import PropTypes from 'prop-types';

const NpmFill = props => {
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
        d="M24 0H0v24h24V0zM2.578 2.578H21.42V21.42H16.67V7.33h-4.752V21.42h-9.34V2.578z"
      ></path>
    </svg>
  );
};

NpmFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NpmFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NpmFill;
