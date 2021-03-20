import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = props => {
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
      id="EyeClosed"
    >
      <path d="M21.124 11.309a.842.842 0 010 1.382C19.559 13.836 16.062 16 12 16s-7.559-2.164-9.124-3.309a.842.842 0 010-1.382C4.441 10.164 7.938 8 12 8s7.559 2.164 9.124 3.309z"></path>
      <path d="M12 19v-3"></path>
      <path d="M2.643 15.986a1 1 0 001.714 1.029l-1.714-1.03zm1.714 1.029l1.5-2.5-1.714-1.03-1.5 2.5 1.714 1.03z"></path>
      <path d="M6.551 18.184a1 1 0 001.898.632l-1.898-.632zm1.898.632l1-3-1.898-.632-1 3 1.898.632z"></path>
      <path d="M15.551 18.816a1 1 0 001.898-.632l-1.898.632zm1.898-.632l-1-3-1.898.632 1 3 1.898-.632z"></path>
      <path d="M19.642 17.015a1 1 0 001.716-1.03l-1.716 1.03zm1.716-1.03l-1.5-2.5-1.716 1.03 1.5 2.5 1.716-1.03z"></path>
    </svg>
  );
};

EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeClosed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EyeClosed;
