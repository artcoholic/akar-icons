import React from 'react';
import PropTypes from 'prop-types';

const Diamond = props => {
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
      <path d="M4.511 13.542c-.681-.852-.681-2.232 0-3.084l6.256-7.82c.68-.85 1.785-.85 2.466 0l6.256 7.82c.681.852.681 2.232 0 3.084l-6.256 7.82c-.68.85-1.785.85-2.466 0l-6.256-7.82z"></path>
    </svg>
  );
};

Diamond.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Diamond.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Diamond;
