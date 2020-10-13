import React from 'react';
import PropTypes from 'prop-types';

const Bell = props => {
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
      <path d="M5.278 9.944a6 6 0 016-5.944h1.444a6 6 0 016 5.944L18.778 16h.973c.477 0 .881.352.947.825A1.912 1.912 0 0118.804 19H5.196a1.912 1.912 0 01-1.894-2.175A.956.956 0 014.25 16h.973l.056-6.056z"></path>
      <path d="M12 22a3 3 0 003-3H9a3 3 0 003 3z"></path>
      <path d="M12 4V2"></path>
    </svg>
  );
};

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bell;
