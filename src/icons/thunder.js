import React from 'react';
import PropTypes from 'prop-types';

const Thunder = props => {
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
      <path d="M17.79 3.603A1 1 0 0 0 16.99 2H10.58a1 1 0 0 0-.867.502l-4.853 8.456a1 1 0 0 0 .868 1.497H9L5.916 20.52c-.445 1.02.76 1.953 1.57 1.215L20 9.331h-6.539l4.328-5.728z"></path>
    </svg>
  );
};

Thunder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Thunder.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Thunder;
