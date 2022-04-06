import React from 'react';
import PropTypes from 'prop-types';

const Info = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 7h.01"></path>
      <path d="M10 11h2v5"></path>
      <path d="M10 16h4"></path>
    </svg>
  );
};

Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Info.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Info;
