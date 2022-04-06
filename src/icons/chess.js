import React from 'react';
import PropTypes from 'prop-types';

const Chess = props => {
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
      <path d="M13.533 3.81L8 2l1 4-5.37 4.475A1.75 1.75 0 0 0 3 11.82v0c0 .617.537 1.088 1.127.986L9 12l-2.097 7h10.614l1.283-5.745c.913-4.088-1.386-8.21-5.267-9.445z"></path>
      <path d="M4 21a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H4v-1z"></path>
    </svg>
  );
};

Chess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Chess.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Chess;
