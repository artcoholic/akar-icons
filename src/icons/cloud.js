import React from 'react';
import PropTypes from 'prop-types';

const Cloud = props => {
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
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.873 3.559A9 9 0 0117.479 9H18a6 6 0 010 12H9A9 9 0 01.01 12.518L0 12.5l.007-.011a8.999 8.999 0 015.862-8.93h.004zm.69 1.876a7.007 7.007 0 00-3.105 2.28A7 7 0 008.977 19H18a4 4 0 100-8h-1.26a1 1 0 01-.968-.75 7 7 0 00-9.208-4.815z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cloud;
