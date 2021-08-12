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
    >
      <path d="M12 4c-4.915 0-8.91 3.378-8.999 8.817a.18.18 0 0 0 .182.183.188.188 0 0 0 .17-.11C3.876 11.767 4.782 11.5 6 11.5c1.185 0 1.964.227 2.456 1.302.054.12.172.198.304.198a.366.366 0 0 0 .326-.224C9.56 11.729 10.901 11.5 12 11.5M12 4c4.916 0 8.91 3.378 8.998 8.817a.18.18 0 0 1-.18.183.188.188 0 0 1-.17-.11c-.525-1.123-1.43-1.39-2.648-1.39-1.185 0-1.964.227-2.456 1.302a.336.336 0 0 1-.304.198.366.366 0 0 1-.326-.224C14.44 11.729 13.099 11.5 12 11.5M12 4V2m0 9.5V20a2 2 0 1 1-4 0"></path>
    </svg>
  );
};

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Umbrella.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Umbrella;
