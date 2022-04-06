import React from 'react';
import PropTypes from 'prop-types';

const DjangoFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.172 0h-4.176v5.932c-.623-.15-1.14-.2-1.816-.2C4.816 5.731 2 8.305 2 12.273c0 4.118 2.655 6.263 7.755 6.268 1.703 0 3.278-.15 5.417-.53V0zM9.734 8.977c.516 0 .92.05 1.408.2v6.248c-.596.075-.972.1-1.434.1-2.14 0-3.305-1.142-3.305-3.21 0-2.125 1.22-3.338 3.331-3.338z"
      ></path>
      <path d="M22 15.233V6.215h-4.17v7.675c0 3.387-.188 4.674-.785 5.786-.57 1.087-1.462 1.8-3.305 2.606L17.615 24c1.843-.862 2.735-1.643 3.412-2.88.726-1.288.973-2.782.973-5.887z"></path>
      <path d="M21.584 0H17.41v3.993h4.175V0z"></path>
    </svg>
  );
};

DjangoFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DjangoFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DjangoFill;
