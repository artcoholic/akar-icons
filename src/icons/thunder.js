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
      id="Thunder"
    >
      <path d="M19 2h-9L4 12.455h5L5.916 20.52c-.445 1.02.76 1.953 1.57 1.215L20 9.331h-6.539L19 2z"></path>
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
