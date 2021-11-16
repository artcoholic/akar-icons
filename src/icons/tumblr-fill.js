import React from 'react';
import PropTypes from 'prop-types';

const TumblrFill = props => {
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
      <g clipPath="url(#clip0_66_158)">
        <path d="M18.895 22.517c-.798.867-2.646 1.456-4.301 1.483h-.182c-5.557 0-6.766-4.164-6.766-6.594v-6.748H5.458a.454.454 0 0 1-.324-.137.472.472 0 0 1-.134-.33V7.003c0-.164.05-.324.142-.458a.782.782 0 0 1 .376-.29c2.855-1.026 3.748-3.562 3.87-5.49.035-.516.297-.765.738-.765H13.4a.451.451 0 0 1 .33.134.468.468 0 0 1 .137.333V5.87h3.823c.121 0 .238.05.324.137a.472.472 0 0 1 .134.33v3.83a.472.472 0 0 1-.134.33.454.454 0 0 1-.324.138h-3.84v6.245c0 1.568 1.015 2.001 1.64 2.001a4.537 4.537 0 0 0 1.488-.321.973.973 0 0 1 .595-.106.483.483 0 0 1 .34.37l1.012 3.014c.068.237.14.498-.03.68z"></path>
      </g>
      <defs>
        <clipPath id="clip0_66_158">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

TumblrFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TumblrFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TumblrFill;
