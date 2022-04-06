import React from 'react';
import PropTypes from 'prop-types';

const VrAr = props => {
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
      <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3.868a2 2 0 0 1-1.715-.971l-1.56-2.6a1 1 0 0 0-1.714 0l-1.56 2.6A2 2 0 0 1 7.868 19H4a2 2 0 0 1-2-2v-7z"></path>
      <path d="M3.813 6.781A4 4 0 0 1 7.14 5h9.718a4 4 0 0 1 3.328 1.781L21 8H3l.813-1.219z"></path>
    </svg>
  );
};

VrAr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VrAr.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VrAr;
