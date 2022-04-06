import React from 'react';
import PropTypes from 'prop-types';

const StackOverflowFill = props => {
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
      <path d="M18.372 20.222v-5.358h1.79V22H4v-7.136h1.79v5.358h12.582z"></path>
      <path d="M7.768 14.356l8.79 1.824.372-1.755L8.14 12.6l-.372 1.756zm1.162-4.157l8.14 3.764.744-1.617-8.14-3.787-.744 1.64zm2.256-3.973l6.907 5.705 1.14-1.363-6.907-5.704-1.14 1.362zM15.651 2L14.21 3.062l5.35 7.16L21 9.159 15.651 2zm-8.07 16.42h8.977v-1.778H7.581v1.778z"></path>
    </svg>
  );
};

StackOverflowFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StackOverflowFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StackOverflowFill;
