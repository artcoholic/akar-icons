import React from 'react';
import PropTypes from 'prop-types';

const LinkedinBoxFill = props => {
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
        d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0z"
      ></path>
    </svg>
  );
};

LinkedinBoxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkedinBoxFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LinkedinBoxFill;
