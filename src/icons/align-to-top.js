import React from 'react';
import PropTypes from 'prop-types';

const AlignToTop = props => {
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
      id="AlignToTop"
    >
      <path d="M12 22V7M5 14l7-7 7 7M2 2h20"></path>
    </svg>
  );
};

AlignToTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignToTop.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default AlignToTop;
