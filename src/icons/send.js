import React from 'react';
import PropTypes from 'prop-types';

const Send = props => {
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
      <path d="M4 12L2.023 4.135A.662.662 0 012 3.995c-.022-.721.772-1.221 1.46-.891L22 12 3.46 20.896c-.688.33-1.482-.17-1.46-.891a.662.662 0 01.023-.14L4 12zm0 0h6.912"></path>
    </svg>
  );
};

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Send.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Send;
