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
      <path d="M16.115 2h-8.23C6.97 2 6.2 2.572 6.086 3.333L6 4c-.08.539.174.985.584 1.363.125.115.251.23.375.347.776.732.85 1.858.508 2.869l-.429 1.269a2.948 2.948 0 0 1-.09.3c-.099.269-.33.862-.63 1.379-.19.327-.478.58-.793.79-.756.504-.4 1.683.51 1.683H10.5v2.111c0 1.242-.21 2.467.345 3.578L12 22l1.155-2.31c.556-1.112.345-2.337.345-3.579V14h4.465c.91 0 1.266-1.18.51-1.684-.315-.21-.603-.462-.793-.79a9.33 9.33 0 0 1-.63-1.379 2.97 2.97 0 0 1-.09-.3l-.429-1.269c-.34-1.01-.267-2.136.508-2.868.124-.117.25-.232.375-.347.41-.378.664-.824.584-1.363l-.086-.667C17.8 2.572 17.029 2 16.115 2z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Pin;
