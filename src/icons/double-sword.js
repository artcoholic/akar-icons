import React from 'react';
import PropTypes from 'prop-types';

const DoubleSword = props => {
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
      <path d="M2 19.2L3.8 21m.9-7.2l.9 3.6m0 0l3.6.9m-3.6-.9l-2.7 2.7M16.4 3.9l-9 9 .45 2.25 2.25.45 9-9L20 3l-3.6.9z"></path>
      <path d="M22 19.2L20.2 21m-.9-7.2l-.9 3.6m0 0l2.7 2.7m-2.7-2.7l-1.8.45-1.8.45M9.3 11L4.9 6.6 4 3l3.6.9L12 8.3m.1 5.5l1.8 1.8 2.25-.45.45-2.25-1.8-1.8"></path>
    </svg>
  );
};

DoubleSword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DoubleSword.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DoubleSword;
