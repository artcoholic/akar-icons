import React from 'react';
import PropTypes from 'prop-types';

const BootstrapFill = props => {
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
        d="M4.985 2c-1.37 0-2.383 1.199-2.337 2.498.043 1.25-.013 2.867-.42 4.186-.41 1.322-1.1 2.16-2.228 2.268v1.215c1.128.107 1.819.945 2.227 2.268.408 1.319.464 2.936.42 4.185-.045 1.3.968 2.499 2.338 2.499h14.032c1.37 0 2.383-1.199 2.337-2.499-.043-1.249.013-2.866.42-4.185.409-1.323 1.098-2.16 2.226-2.268v-1.215c-1.128-.108-1.817-.946-2.226-2.268-.407-1.32-.463-2.937-.42-4.186C21.4 3.198 20.386 2 19.017 2H4.985zM16.27 13.769c0 1.79-1.335 2.875-3.55 2.875H8.949a.407.407 0 0 1-.407-.407V6.881a.407.407 0 0 1 .407-.406h3.75c1.847 0 3.06 1 3.06 2.537 0 1.078-.816 2.043-1.855 2.213v.056c1.415.155 2.367 1.135 2.367 2.488zM12.31 7.764h-2.15v3.038h1.811c1.4 0 2.172-.564 2.172-1.572 0-.944-.664-1.466-1.833-1.466zm-2.15 4.243v3.347h2.23c1.457 0 2.23-.585 2.23-1.684 0-1.1-.794-1.663-2.324-1.663h-2.136z"
      ></path>
    </svg>
  );
};

BootstrapFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BootstrapFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BootstrapFill;
