import React from 'react';
import PropTypes from 'prop-types';

const Scissor = props => {
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
      <path d="M8.252 18.459C7.462 19.764 7.107 21 5.7 21 4.209 21 3 19.757 3 18.223s1.209-2.778 2.7-2.778c1.4 0 2.55 1.095 2.686 2.498a.846.846 0 0 1-.134.515zm0 0l1.948-3.476m5.548 3.476C16.538 19.764 16.893 21 18.3 21c1.491 0 2.7-1.243 2.7-2.777s-1.209-2.778-2.7-2.778c-1.4 0-2.55 1.095-2.687 2.498-.017.182.04.36.135.515zm0 0L7.093 3.346a.659.659 0 0 0-1.1-.081c-1.704 2.19-1.534 5.35.395 7.333l9.36 7.86zm-3.797-6.63l4.953-8.494a.66.66 0 0 1 1.098-.076c1.707 2.194 1.537 5.358-.395 7.345L16.5 11.742"></path>
    </svg>
  );
};

Scissor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Scissor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Scissor;
