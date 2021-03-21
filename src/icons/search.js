import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
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
      id="Search"
    >
      <path d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"></path>
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Search.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Search;
