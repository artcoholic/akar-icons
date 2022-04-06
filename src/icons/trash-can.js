import React from 'react';
import PropTypes from 'prop-types';

const TrashCan = props => {
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
      <path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z"></path>
      <path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z"></path>
      <path d="M2 6h20"></path>
      <path d="M10 11v5"></path>
      <path d="M14 11v5"></path>
    </svg>
  );
};

TrashCan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashCan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashCan;
