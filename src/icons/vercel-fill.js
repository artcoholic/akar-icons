import React from 'react';
import PropTypes from 'prop-types';

const VercelFill = props => {
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
      <path d="M12 1l12 21H0L12 1z"></path>
    </svg>
  );
};

VercelFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VercelFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VercelFill;
