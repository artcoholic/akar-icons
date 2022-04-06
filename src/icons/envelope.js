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
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"></path>
      <path d="M2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8"></path>
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
