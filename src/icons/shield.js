import React from 'react';
import PropTypes from 'prop-types';

const Shield = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M13.147 21.197l1.67-1.168a13.393 13.393 0 0 0 5.447-13.624.837.837 0 0 0-.453-.586L12 2 4.19 5.819a.837.837 0 0 0-.454.586 13.393 13.393 0 0 0 5.448 13.624l1.67 1.168a2 2 0 0 0 2.293 0z"></path>
    </svg>
  );
};

Shield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Shield;
