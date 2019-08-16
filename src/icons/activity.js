import React from 'react';
import PropTypes from 'prop-types';

const Activity = props => {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  );
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Activity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Activity;
