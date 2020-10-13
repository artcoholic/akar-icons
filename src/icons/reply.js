import React from 'react';
import PropTypes from 'prop-types';

const Reply = props => {
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
      <path d="M2 10.981L8.973 2v4.99c11.952 0 13.316 9.688 12.984 15.01l-.007-.041c-.502-2.685-.712-6.986-12.977-6.986v4.99L2 10.98z"></path>
    </svg>
  );
};

Reply.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Reply.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Reply;
