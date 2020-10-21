import React from 'react';
import PropTypes from 'prop-types';

const Envelope = props => {
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
      <rect x="2" y="5" width="20" height="14" rx="2"></rect>
      <path d="M3 6l7.772 6.045a2 2 0 002.456 0L21 6"></path>
      <path d="M8 10l-6 6"></path>
      <path d="M16 10l6 6"></path>
    </svg>
  );
};

Envelope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Envelope.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Envelope;
