import React from 'react';
import PropTypes from 'prop-types';

const HeptagonFill = props => {
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
      <path d="M11.114 1.438a2 2 0 0 1 1.772 0l7.077 3.495a2 2 0 0 1 1.066 1.359l1.767 7.937a2 2 0 0 1-.374 1.662l-4.926 6.337a2 2 0 0 1-1.579.772H8.083a2 2 0 0 1-1.579-.772L1.578 15.89a2 2 0 0 1-.374-1.662l1.767-7.937a2 2 0 0 1 1.066-1.359l7.077-3.495z"></path>
    </svg>
  );
};

HeptagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HeptagonFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HeptagonFill;
