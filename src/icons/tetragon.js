import React from 'react';
import PropTypes from 'prop-types';

const Tetragon = props => {
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
      <path d="M3.575 13.388a1.962 1.962 0 0 1 0-2.776l7.037-7.037a1.962 1.962 0 0 1 2.776 0l7.037 7.037a1.963 1.963 0 0 1 0 2.776l-7.037 7.037a1.963 1.963 0 0 1-2.776 0l-7.037-7.037z"></path>
    </svg>
  );
};

Tetragon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tetragon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Tetragon;
