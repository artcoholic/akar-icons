import React from 'react';
import PropTypes from 'prop-types';

const Briefcase = props => {
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
      <rect x="3" y="7" width="18" height="12" rx="2"></rect>
      <path d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9V6z"></path>
      <path d="M10 12l.211.106a4 4 0 0 0 3.578 0L14 12"></path>
    </svg>
  );
};

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Briefcase.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Briefcase;
