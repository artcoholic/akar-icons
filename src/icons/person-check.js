import React from 'react';
import PropTypes from 'prop-types';

const PersonCheck = props => {
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
      id="PersonCheck"
    >
      <circle cx="12" cy="7" r="5"></circle>
      <path d="M17 22H5a2 2 0 01-2-2v-3a3 3 0 013-3h1"></path>
      <path d="M16 16l2.25 2L22 14"></path>
    </svg>
  );
};

PersonCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonCheck;
