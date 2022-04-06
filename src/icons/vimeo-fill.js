import React from 'react';
import PropTypes from 'prop-types';

const VimeoFill = props => {
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
      <path d="M21.99 7.16c-.092 2.027-1.52 4.8-4.28 8.323C14.857 19.161 12.44 21 10.462 21c-1.225 0-2.26-1.122-3.106-3.359-.564-2.055-1.127-4.11-1.697-6.16-.627-2.237-1.3-3.359-2.025-3.359-.155 0-.707.33-1.645.98L1 7.837c1.035-.906 2.06-1.805 3.066-2.71 1.38-1.185 2.422-1.805 3.112-1.868 1.633-.153 2.64.951 3.02 3.325.408 2.556.69 4.15.851 4.77.472 2.124.99 3.183 1.553 3.183.437 0 1.099-.688 1.979-2.066.88-1.378 1.351-2.425 1.415-3.143.126-1.19-.345-1.782-1.415-1.782-.5 0-1.018.114-1.553.342 1.03-3.353 3.002-4.982 5.913-4.885 2.157.057 3.175 1.446 3.049 4.156z"></path>
    </svg>
  );
};

VimeoFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VimeoFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VimeoFill;
