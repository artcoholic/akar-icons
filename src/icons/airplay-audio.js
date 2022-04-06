import React from 'react';
import PropTypes from 'prop-types';

const AirplayAudio = props => {
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
      <path d="M12 16l6 5H6l6-5z"></path>
      <path d="M4 18a9.956 9.956 0 0 1-2-6C2 6.477 6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6"></path>
      <path d="M17.123 15.125a6 6 0 1 0-10.247-.002"></path>
      <path d="M14 12a2 2 0 1 0-4 0"></path>
    </svg>
  );
};

AirplayAudio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AirplayAudio.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AirplayAudio;
