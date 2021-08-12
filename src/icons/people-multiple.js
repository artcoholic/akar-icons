import React from 'react';
import PropTypes from 'prop-types';

const PeopleMultiple = props => {
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
      <circle cx="7" cy="5" r="3"></circle>
      <path d="M10 12H5.898a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 4.266 22H9"></path>
      <path d="M21.719 19.752l-.64-5.124A3 3 0 0 0 18.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 14.266 22h5.468a2 2 0 0 0 1.985-2.248z"></path>
      <circle cx="17" cy="5" r="3"></circle>
    </svg>
  );
};

PeopleMultiple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PeopleMultiple.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PeopleMultiple;
