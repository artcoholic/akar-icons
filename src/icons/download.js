import React from 'react';
import PropTypes from 'prop-types';

const Download = props => {
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
      id="Download"
    >
      <path d="M12 15V3m0 12l-4-4m4 4l4-4"></path>
      <path d="M6 6H4.284a2 2 0 00-1.982 2.264l1.467 11A2 2 0 005.75 21h12.498a2 2 0 001.982-1.736l1.467-11A2 2 0 0019.716 6H18"></path>
    </svg>
  );
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Download.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Download;
