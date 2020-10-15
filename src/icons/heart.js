import React from 'react';
import PropTypes from 'prop-types';

const Heart = props => {
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
      <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.163.84 7.238 8.985 12.426a1.893 1.893 0 002.03 0C21.16 15.188 22 10.113 22 7.95 22 5.216 19.761 3 17 3s-5 2.216-5 4.95C12 5.216 9.761 3 7 3z"></path>
    </svg>
  );
};

Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Heart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Heart;
