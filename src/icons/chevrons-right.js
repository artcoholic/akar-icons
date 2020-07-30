import React from 'react';
import PropTypes from 'prop-types';

const ChevronsRight = props => {
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
        d="M12.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L16.586 12l-4.293-4.293a1 1 0 010-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12 5.293 7.707a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsRight;
