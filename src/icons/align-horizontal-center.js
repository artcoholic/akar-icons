import React from 'react';
import PropTypes from 'prop-types';

const AlignHorizontalCenter = props => {
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
      id="AlignHorizontalCenter"
    >
      <path d="M12 2v20"></path>
      <rect x="4" y="6" width="16" height="4"></rect>
      <rect x="7" y="14" width="10" height="4"></rect>
    </svg>
  );
};

AlignHorizontalCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignHorizontalCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignHorizontalCenter;
