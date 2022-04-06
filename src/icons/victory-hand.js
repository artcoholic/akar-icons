import React from 'react';
import PropTypes from 'prop-types';

const VictoryHand = props => {
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
      <path d="M12 11l-1-7.272c0-.466.185-.913.515-1.243 1.024-1.024 2.777-.44 2.982.994L16 10l1.508-6.328a1.682 1.682 0 0 1 3.276.73L19 16"></path>
      <path d="M19 16c-.536 4-3.358 6-7.5 6C7.358 22 4 20 4 16"></path>
      <path d="M4 16v-4a2 2 0 1 1 4 0m4 1v-2a2 2 0 1 0-4 0v4"></path>
      <path d="M13.692 17H11a2 2 0 1 1 0-4h4c2.21 0 4.5 2 3.5 5"></path>
    </svg>
  );
};

VictoryHand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VictoryHand.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VictoryHand;
