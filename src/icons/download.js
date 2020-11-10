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
      <path d="M6 6H4.138a2 2 0 00-1.996 2.133l.734 11A2 2 0 004.87 21H19.13a2 2 0 001.995-1.867l.734-11A2 2 0 0019.862 6H18"></path>
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
