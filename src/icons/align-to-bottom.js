import React from 'react';
import PropTypes from 'prop-types';

const AlignToBottom = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
      <path d="M3 22h18"></path>
      <path d="M12 2v15"></path>
      <path d="M5 10l7 7 7-7"></path>
    </svg>
  );
};

AlignToBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AlignToBottom;
