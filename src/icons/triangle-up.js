import React from 'react';
import PropTypes from 'prop-types';

const TriangleUp = props => {
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
      <path d="M12 7l-6 8h12l-6-8z"></path>
    </svg>
  );
};

TriangleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TriangleUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TriangleUp;
