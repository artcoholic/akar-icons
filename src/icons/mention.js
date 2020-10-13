import React from 'react';
import PropTypes from 'prop-types';

const Mention = props => {
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
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.252 0 4.33-.744 6.001-2"></path>
      <path d="M16 8v4c0 1 .6 3 3 3s3-2 3-3"></path>
    </svg>
  );
};

Mention.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Mention.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Mention;
