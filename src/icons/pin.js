import React from 'react';
import PropTypes from 'prop-types';

const Pin = props => {
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
      id="Pin"
    >
      <path d="M16.115 2h-8.23C6.97 2 6.2 2.572 6.086 3.333L6 4c-.08.539.174.985.584 1.363.17.157.343.314.51.476.684.666.779 1.67.547 2.597l-.603 2.412a2.951 2.951 0 01-.09.3c-.099.269-.33.862-.63 1.379-.19.327-.478.58-.793.79-.756.504-.4 1.683.51 1.683H10.5v1.111c0 1.242-.21 2.467.345 3.578L12 22l1.155-2.31c.556-1.112.345-2.337.345-3.579V15h4.465c.91 0 1.266-1.18.51-1.684-.315-.21-.603-.462-.793-.79a9.33 9.33 0 01-.63-1.379 2.971 2.971 0 01-.09-.3l-.603-2.412c-.232-.926-.137-1.93.547-2.596.167-.162.34-.319.51-.476.41-.378.664-.824.584-1.363l-.086-.667C17.8 2.572 17.029 2 16.115 2z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pin;
