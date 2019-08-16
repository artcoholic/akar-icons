import React from 'react';
import PropTypes from 'prop-types';

const Anchor = props => {
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
      <path d="M12 8a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M12 22V8"></path>
      <path d="M5 12H2a10 10 0 0020 0h-3"></path>
    </svg>
  );
};

Anchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Anchor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Anchor;
