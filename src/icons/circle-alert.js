import React from 'react';
import PropTypes from 'prop-types';

const CircleAlert = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 7v6m0 3.5v.5"></path>
    </svg>
  );
};

CircleAlert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleAlert.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleAlert;
