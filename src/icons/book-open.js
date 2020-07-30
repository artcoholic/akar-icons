import React from 'react';
import PropTypes from 'prop-types';

const BookOpen = props => {
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
        d="M1 3a1 1 0 011-1h6a5 5 0 015 5v14a1 1 0 11-2 0 2 2 0 00-2-2H2a1 1 0 01-1-1V3zm10 14.536V7a3 3 0 00-3-3H3v13h6a4 4 0 012 .536z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.464 3.464A5 5 0 0116 2h6a1 1 0 011 1v15a1 1 0 01-1 1h-7a2 2 0 00-2 2 1 1 0 11-2 0V7a5 5 0 011.464-3.536zM13 17.536A4 4 0 0115 17h6V4h-5a3 3 0 00-3 3v10.536z"
      ></path>
    </svg>
  );
};

BookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BookOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BookOpen;
