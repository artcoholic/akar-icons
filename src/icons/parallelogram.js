import React from 'react';
import PropTypes from 'prop-types';

const Parallelogram = props => {
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
      <path d="M5.586 6.45A2 2 0 0 1 7.509 5h11.84a2 2 0 0 1 1.923 2.55l-2.858 10A2 2 0 0 1 16.491 19H4.651a2 2 0 0 1-1.923-2.55l2.858-10z"></path>
    </svg>
  );
};

Parallelogram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Parallelogram.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Parallelogram;
