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
      <path d="M17.684 3.603c.521-.659.03-1.603-.836-1.603h-6.716c-.375 0-.722.192-.909.502l-5.082 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.849l4.533-5.728z"></path>
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
