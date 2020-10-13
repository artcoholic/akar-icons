import React from 'react';
import PropTypes from 'prop-types';

const Headphone = props => {
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
      <path d="M18 12.004l.132-1.055C18.592 7.26 15.717 4 12 4c-3.717 0-6.593 3.26-6.132 6.95L6 12.003m12 0l1.892.138c1.248.077 2.19 1.026 2.102 2.12l-.237 2.973C21.627 18.877 20 20 18.13 20H17l1-7.996zm-12 0l-1.892.138c-1.249.077-2.19 1.026-2.102 2.12l.237 2.973C2.373 18.877 4 20 5.87 20H7l-1-7.996z"></path>
    </svg>
  );
};

Headphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Headphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Headphone;
