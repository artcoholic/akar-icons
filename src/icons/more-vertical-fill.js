import React from 'react';
import PropTypes from 'prop-types';

const MoreVerticalFill = props => {
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
        d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      ></path>
    </svg>
  );
};

MoreVerticalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoreVerticalFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoreVerticalFill;
