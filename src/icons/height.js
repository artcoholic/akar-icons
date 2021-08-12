import React from 'react';
import PropTypes from 'prop-types';

const Height = props => {
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
      <path d="M12 22V2m0 20l-4-4m4 4l4-4M12 2L8 6m4-4l4 4"></path>
    </svg>
  );
};

Height.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Height.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Height;
