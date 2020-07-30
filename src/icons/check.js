import React from 'react';
import PropTypes from 'prop-types';

const Check = props => {
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
        d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Check.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Check;
