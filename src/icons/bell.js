import React from 'react';
import PropTypes from 'prop-types';

const Bell = props => {
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
      <path d="M8.785 3.929L8.077 2m11.535 11.122l-2.195-5.82c-1.194-3.164-4.733-4.782-7.931-3.627l-1.403.507C4.885 5.338 3.222 8.835 4.356 12.02l2.087 5.86-.945.341a.98.98 0 00-.629 1.128 1.979 1.979 0 002.61 1.433l13.22-4.776a1.957 1.957 0 001.07-2.763.992.992 0 00-1.211-.463l-.946.342zm-4.066 4.745a3.073 3.073 0 01-1.854 3.947 3.108 3.108 0 01-3.975-1.84l5.829-2.107z"></path>
    </svg>
  );
};

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bell;
