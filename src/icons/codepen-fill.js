import React from 'react';
import PropTypes from 'prop-types';

const CodepenFill = props => {
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
        d="M11.372.19c.38-.253.875-.253 1.256 0L23.492 7.4c.317.21.508.565.508.946v7.308c0 .38-.19.736-.508.947l-10.864 7.21c-.38.252-.875.252-1.256 0L.508 16.6A1.136 1.136 0 0 1 0 15.654V8.346c0-.38.19-.736.508-.947L11.372.19zm-9.1 10.273v3.058l2.288-1.54-2.288-1.518zm4.337 2.878L3.18 15.648l7.684 5.1v-4.583L6.61 13.341zm6.527 2.824v4.582l7.684-5.1-3.43-2.306-4.254 2.824zm6.303-4.183l2.29 1.54v-3.06l-2.29 1.52zm1.371-3.636l-3.41 2.263-4.264-2.868V3.253l7.674 5.093zm-9.946-5.093V7.74l-4.263 2.868L3.19 8.346l7.674-5.093zM12 9.715l-3.35 2.254L12 14.192l3.35-2.223L12 9.715z"
      ></path>
    </svg>
  );
};

CodepenFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CodepenFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CodepenFill;
