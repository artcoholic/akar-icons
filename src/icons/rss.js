import React from 'react';
import PropTypes from 'prop-types';

const Rss = props => {
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
      <path d="M4 10.418c6.068-.319 9.9 3.514 9.582 9.582"></path>
      <circle cx="5" cy="19" r="1"></circle>
      <path d="M4 4.03C14.114 3.5 20.501 9.887 19.97 20"></path>
    </svg>
  );
};

Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Rss.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Rss;
