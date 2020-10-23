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
      id="Envelope"
    >
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="M3 5l7.671 6.819a2 2 0 002.658 0L21 5"></path>
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
