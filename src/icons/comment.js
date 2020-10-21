import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
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
      <path d="M6 17v0a4 4 0 01-4-4v-3c0-2.809 0-4.213.674-5.222a4 4 0 011.104-1.104C4.787 3 6.19 3 9 3h6c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C22 5.787 22 7.19 22 10v0c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 01-1.104 1.104C19.213 17 17.81 17 15 17h-3"></path>
      <path d="M6 17v1.172c0 2.055 0 3.082.617 3.338.618.255 1.344-.471 2.797-1.924L12 17"></path>
    </svg>
  );
};

Comment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Comment.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Comment;
