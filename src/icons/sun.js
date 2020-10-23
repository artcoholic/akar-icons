import React from 'react';
import PropTypes from 'prop-types';

const Sun = props => {
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
      id="Sun"
    >
      <path d="M12 3V2m0 20v-1m9-9h1M2 12h1m16-7l1-1M4 20l1-1M4 4l1 1m14 14l1 1m-2-8a6 6 0 11-12 0 6 6 0 0112 0z"></path>
    </svg>
  );
};

Sun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Sun;
