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
      id="ShareBox"
    >
      <path d="M12 2v12m0-12L8 6m4-4l4 4"></path>
      <path d="M6 11H4.396a2 2 0 00-1.967 2.358l1.272 7A2 2 0 005.67 22h12.662a2 2 0 001.968-1.642l1.272-7A2 2 0 0019.604 11H18"></path>
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
