import React from 'react';
import PropTypes from 'prop-types';

const TwoLineVertical = props => {
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
      <path d="M15 19V5M9 19V5"></path>
    </svg>
  );
};

TwoLineVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TwoLineVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TwoLineVertical;
