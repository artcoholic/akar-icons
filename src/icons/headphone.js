import React from 'react';
import PropTypes from 'prop-types';

const Headphone = props => {
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
      <path d="M2 13.565C2 11.512 4 11 6 11v9a4 4 0 0 1-4-4v-2.435z"></path>
      <path d="M22 13.565C22 11.512 20 11 18 11v9a4 4 0 0 0 4-4v-2.435z"></path>
      <path d="M6 20V10a6 6 0 1 1 12 0v10"></path>
    </svg>
  );
};

Headphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Headphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Headphone;
