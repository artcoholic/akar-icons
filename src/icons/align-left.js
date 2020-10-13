import React from 'react';
import PropTypes from 'prop-types';

const AlignLeft = props => {
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
      <path d="M2 2v20"></path>
      <path d="M8 9h14M8 15h7"></path>
    </svg>
  );
};

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignLeft;
