import React from 'react';
import PropTypes from 'prop-types';

const BookClose = props => {
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
      <path d="M4 4.222v15.556C4 21.005 5.023 22 6.286 22h11.428C18.977 22 20 21.005 20 19.778V8.444a2 2 0 0 0-2-2H6.286C5.023 6.444 4 5.45 4 4.222zm0 0C4 2.995 5.023 2 6.286 2h9.143c1.262 0 2.285.995 2.285 2.222v2.222"></path>
    </svg>
  );
};

BookClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BookClose.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BookClose;
