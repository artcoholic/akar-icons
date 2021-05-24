import React from 'react';
import PropTypes from 'prop-types';

const Umbrella = props => {
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
      id="Umbrella"
    >
      <path d="M3.183 14A.18.18 0 0 1 3 13.817C3.09 8.378 7.085 4 12 4c4.916 0 8.91 4.378 8.998 9.817a.18.18 0 0 1-.18.183.188.188 0 0 1-.17-.11c-.525-1.123-1.58-1.89-2.798-1.89-1.185 0-1.814.727-2.306 1.802a.336.336 0 0 1-.304.198.366.366 0 0 1-.326-.224C14.44 12.729 13.099 12 12 12c-1.099 0-2.44.73-2.914 1.776A.366.366 0 0 1 8.76 14a.336.336 0 0 1-.304-.198C7.964 12.727 7.336 12 6.15 12c-1.217 0-2.273.767-2.798 1.89a.188.188 0 0 1-.17.11z"></path>
      <path d="M12 12v8a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-1"></path>
      <path d="M12 4V2"></path>
    </svg>
  );
};

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Umbrella.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Umbrella;
