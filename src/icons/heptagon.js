import React from 'react';
import PropTypes from 'prop-types';

const Heptagon = props => {
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
      <path d="M11.114 2.438a2 2 0 0 1 1.772 0l6.275 3.1a2 2 0 0 1 1.066 1.358l1.569 7.047a2 2 0 0 1-.374 1.662l-4.371 5.623a2 2 0 0 1-1.579.772H8.528a2 2 0 0 1-1.579-.772l-4.371-5.623a2 2 0 0 1-.374-1.662l1.569-7.047a2 2 0 0 1 1.066-1.359l6.275-3.1z"></path>
    </svg>
  );
};

Heptagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Heptagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Heptagon;
