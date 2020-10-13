import React from 'react';
import PropTypes from 'prop-types';

const FolderAdd = props => {
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
      <path d="M22 21V7H12l-2-4H2v18h20z"></path>
      <path d="M12 12v2m0 0v2m0-2h2m-2 0h-2"></path>
    </svg>
  );
};

FolderAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderAdd;
