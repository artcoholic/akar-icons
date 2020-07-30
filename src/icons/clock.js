import React from 'react';
import PropTypes from 'prop-types';

const Clock = props => {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5a1 1 0 011 1v5.382l3.447 1.724a1 1 0 11-.894 1.788l-4-2A1 1 0 0111 12V6a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clock;
