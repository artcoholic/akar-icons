import React from 'react';
import PropTypes from 'prop-types';

const PeopleGroup = props => {
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
      <path d="M16.719 19.752l-.64-5.124A3 3 0 0 0 13.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 9.266 22h5.468a2 2 0 0 0 1.985-2.248z"></path>
      <circle cx="12" cy="5" r="3"></circle>
      <circle cx="4" cy="9" r="2"></circle>
      <circle cx="20" cy="9" r="2"></circle>
      <path d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20H7"></path>
      <path d="M20 14h.306a2 2 0 0 1 1.973 1.671l.333 2A2 2 0 0 1 20.639 20H17"></path>
    </svg>
  );
};

PeopleGroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PeopleGroup.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PeopleGroup;
