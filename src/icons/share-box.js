import React from 'react';
import PropTypes from 'prop-types';

const ShareBox = props => {
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
      <path d="M12 2v14m0-14L8 6m4-4l4 4"></path>
      <path d="M18.25 11H20a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7a2 2 0 012-2h1.75"></path>
    </svg>
  );
};

ShareBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShareBox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShareBox;
