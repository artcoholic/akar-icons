import React from 'react';
import PropTypes from 'prop-types';

const Draft = props => {
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
      id="Draft"
    >
      <path d="M16 19v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-9a2 2 0 012-2h1m6.5-3v4H16m4-3.6V16a2 2 0 01-2 2h-8a2 2 0 01-2-2V4a2 2 0 012-2h5.5L20 6.4z"></path>
    </svg>
  );
};

Draft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Draft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Draft;
