import React from 'react';
import PropTypes from 'prop-types';

const Cake = props => {
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
      <path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z"></path>
      <path d="M3 12l2.914 2.331c1.187.95 2.9.855 3.975-.22v0a2.985 2.985 0 0 1 4.222 0v0a2.985 2.985 0 0 0 3.975.22L21 12"></path>
      <path d="M12 7a2 2 0 0 1-2-2c0-.876.677-1.576 1.273-2.217L12 2l.727.783C13.323 3.424 14 4.124 14 5a2 2 0 0 1-2 2z"></path>
    </svg>
  );
};

Cake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cake.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cake;
