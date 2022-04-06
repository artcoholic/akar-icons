import React from 'react';
import PropTypes from 'prop-types';

const OctagonFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M11.235 1.317a2 2 0 0 1 1.53 0l6.248 2.588a2 2 0 0 1 1.082 1.082l2.588 6.248a2 2 0 0 1 0 1.53l-2.588 6.248a2 2 0 0 1-1.082 1.082l-6.248 2.588a2 2 0 0 1-1.53 0l-6.248-2.588a2 2 0 0 1-1.082-1.082l-2.588-6.248a2 2 0 0 1 0-1.53l2.588-6.248a2 2 0 0 1 1.082-1.082l6.248-2.588z"></path>
    </svg>
  );
};

OctagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OctagonFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OctagonFill;
