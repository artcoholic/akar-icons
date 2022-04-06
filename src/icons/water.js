import React from 'react';
import PropTypes from 'prop-types';

const Water = props => {
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
      <path d="M12 22a8 8 0 0 1-8-8c0-3.502 2.71-6.303 5.093-8.87L12 2l2.907 3.13C17.29 7.698 20 10.499 20 14a8 8 0 0 1-8 8z"></path>
    </svg>
  );
};

Water.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Water.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Water;
