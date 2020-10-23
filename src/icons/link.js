import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
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
      id="Link"
    >
      <path d="M13.544 10.456a4.368 4.368 0 00-6.176 0l-3.089 3.088a4.367 4.367 0 106.177 6.177L12 18.177m-1.544-4.633a4.368 4.368 0 006.177 0l3.088-3.088a4.368 4.368 0 00-6.177-6.177L12 5.823"></path>
    </svg>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Link.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Link;
