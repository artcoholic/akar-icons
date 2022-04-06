import React from 'react';
import PropTypes from 'prop-types';

const Dental = props => {
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
      <path d="M12 4.363C9 2.732 3 1.23 3 8.277c0 5.492 1.188 9.756 3.005 12.141.645.847 2.216.584 2.888-.265a1.22 1.22 0 0 0 .174-.328l1.063-2.8c.654-1.72 3.086-1.72 3.74 0l1.063 2.8c.045.116.097.23.174.328.672.85 2.243 1.112 2.888.265C19.812 18.033 21 13.77 21 8.277c0-7.046-6-5.545-9-3.914zm0 0L15 6"></path>
    </svg>
  );
};

Dental.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Dental.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Dental;
