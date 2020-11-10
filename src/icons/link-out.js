import React from 'react';
import PropTypes from 'prop-types';

const LinkOut = props => {
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
      id="LinkOut"
    >
      <path d="M18 14v5a2 2 0 01-2 2L5 20a2 2 0 01-2-2V8a2 2 0 011.802-1.99c.131-.013.263-.023.392-.049L10 5"></path>
      <path d="M13.5 10.5L21 3"></path>
      <path d="M16 3h5v5"></path>
    </svg>
  );
};

LinkOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkOut;
