import React from 'react';
import PropTypes from 'prop-types';

const SpotifyFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M11.995 0C5.381 0 0 5.382 0 11.996 0 18.616 5.381 24 11.995 24 18.615 24 24 18.615 24 11.996 24 5.382 18.615 0 11.995 0zM5.908 16.404a14.548 14.548 0 0 1 4.238-.638c2.414 0 4.797.612 6.892 1.77.125.068.238.292.29.572.05.28.03.567-.052.716a.61.61 0 0 1-.834.24A13.107 13.107 0 0 0 6.277 18.03a.61.61 0 0 1-.771-.402c-.107-.35.114-1.13.402-1.224zm-.523-4.42a18.154 18.154 0 0 1 4.76-.635c2.894 0 5.767.7 8.31 2.026.179.09.31.244.37.432a.747.747 0 0 1-.052.578c-.227.444-.493.743-.66.743a.769.769 0 0 1-.35-.086 16.33 16.33 0 0 0-7.617-1.854 16.34 16.34 0 0 0-4.366.585.749.749 0 0 1-.92-.525c-.112-.422.145-1.16.525-1.264zM5.25 9.098a.88.88 0 0 1-1.073-.641c-.123-.498.188-1.076.64-1.19a22.365 22.365 0 0 1 5.328-.649c3.45 0 6.756.776 9.824 2.307a.888.888 0 0 1 .4 1.19c-.143.288-.453.598-.795.598a.924.924 0 0 1-.388-.087 20.026 20.026 0 0 0-9.041-2.126c-1.635 0-3.282.201-4.895.598z"></path>
    </svg>
  );
};

SpotifyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SpotifyFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SpotifyFill;
