import React from 'react';
import PropTypes from 'prop-types';

const GoogleFill = props => {
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
      <path d="M21.456 10.154c.123.659.19 1.348.19 2.067 0 5.624-3.764 9.623-9.449 9.623A9.841 9.841 0 0 1 2.353 12a9.841 9.841 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489-3.248 0-5.888 2.744-5.888 5.993 0 3.248 2.64 5.998 5.888 5.998 2.947 0 4.953-1.685 5.365-3.999h-5.365v-3.839h9.26z"></path>
    </svg>
  );
};

GoogleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GoogleFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default GoogleFill;
