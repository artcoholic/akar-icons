import React from 'react';
import PropTypes from 'prop-types';

const AlignToMiddle = props => {
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
      <path d="M21 12H3"></path>
      <path d="M12 2v6"></path>
      <path d="M12 22v-6"></path>
      <path d="M9 5l3 3 3-3"></path>
      <path d="M9 19l3-3 3 3"></path>
    </svg>
  );
};

AlignToMiddle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignToMiddle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignToMiddle;
