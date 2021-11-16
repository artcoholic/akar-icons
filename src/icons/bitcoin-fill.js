import React from 'react';
import PropTypes from 'prop-types';

const BitcoinFill = props => {
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
      <g clipPath="url(#clip0_399_390)">
        <path d="M11.385 15.275c1.111-.004 3.54-.013 3.512-1.558-.027-1.58-2.36-1.485-3.497-1.438-.127.005-.24.01-.332.011l.052 2.987c.075-.002.165-.002.265-.002z"></path>
        <path d="M11.267 10.922c.927-.001 2.95-.003 2.926-1.408-.026-1.437-1.969-1.352-2.918-1.31-.107.005-.2.009-.278.01l.047 2.709.223-.001z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.096 23.641c6.43 1.603 12.942-2.31 14.545-8.738C25.244 8.474 21.33 1.962 14.9.36 8.474-1.244 1.962 2.67.36 9.1c-1.603 6.428 2.31 12.94 8.737 14.542zm4.282-17.02c1.754.124 3.15.638 3.333 2.242.136 1.174-.344 1.889-1.123 2.303 1.3.288 2.125 1.043 1.995 2.771-.161 2.145-1.748 2.748-4.026 2.918l.038 2.25-1.356.025-.039-2.22c-.351.006-.711.01-1.084.008l.04 2.23-1.356.024-.04-2.254-.383.003c-.194.001-.39.002-.586.006l-1.766.03.241-1.624s1.004-.002.986-.017c.384-.008.481-.285.502-.459L8.693 11.3l.097-.002h.046a1.101 1.101 0 0 0-.144-.007l-.044-2.54c-.057-.274-.241-.59-.79-.58.015-.02-.986.017-.986.017L6.846 6.74l1.872-.032v.007c.281-.005.57-.015.863-.026l-.038-2.229 1.356-.023.038 2.184c.362-.013.726-.027 1.083-.033l-.038-2.17 1.357-.024.039 2.229z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_399_390">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BitcoinFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BitcoinFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BitcoinFill;
