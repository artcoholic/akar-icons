import React from 'react';
import PropTypes from 'prop-types';

const Jar = props => {
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
      <path d="M3 9l1.164 8.926a3.875 3.875 0 0 0 2.844 3.243v0c3.27.872 6.713.872 9.984 0v0a3.875 3.875 0 0 0 2.844-3.243L21 9"></path>
      <path d="M5.035 7.266C3.763 7.661 3 8.165 3 8.714 3 9.977 7.03 11 12 11s9-1.023 9-2.286c0-.55-.764-1.054-2.037-1.448"></path>
      <path d="M9 4l-3 .51C4.159 4.874 3 5.407 3 6c0 1.105 4.03 2 9 2s9-.895 9-2c0-.592-1.159-1.125-3-1.49L15 4"></path>
      <path d="M15 4v0a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v0"></path>
    </svg>
  );
};

Jar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Jar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Jar;
