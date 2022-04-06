import React from 'react';
import PropTypes from 'prop-types';

const FigmaFill = props => {
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
      <g clipPath="url(#clip0_100_5)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.415 0C5.968 0 4 2.053 4 4.568c0 1.529.728 2.887 1.847 3.716A4.613 4.613 0 0 0 4 12c0 1.53.728 2.887 1.847 3.716A4.613 4.613 0 0 0 4 19.432C4 21.947 5.968 24 8.415 24c2.446 0 4.415-2.053 4.415-4.568V15.57a4.307 4.307 0 0 0 2.755.999C18.032 16.568 20 14.515 20 12c0-1.53-.727-2.887-1.847-3.716A4.613 4.613 0 0 0 20 4.568C20 2.053 18.032 0 15.585 0h-7.17zM5.659 4.568c0-1.591 1.242-2.865 2.756-2.865h2.755v5.73H8.415c-1.514 0-2.756-1.275-2.756-2.865zm9.926 2.864H12.83v-5.73h2.755c1.515 0 2.756 1.275 2.756 2.866 0 1.59-1.241 2.864-2.756 2.864zM5.66 12c0-1.59 1.242-2.865 2.756-2.865h2.755v5.73H8.415C6.9 14.865 5.659 13.59 5.659 12zm7.17 0c0-1.59 1.242-2.865 2.756-2.865 1.515 0 2.756 1.274 2.756 2.865 0 1.59-1.241 2.865-2.756 2.865-1.514 0-2.755-1.274-2.755-2.865zm-7.17 7.432c0-1.59 1.242-2.864 2.756-2.864h2.755v2.864c0 1.591-1.24 2.865-2.755 2.865-1.514 0-2.756-1.274-2.756-2.865z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_100_5">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FigmaFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FigmaFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FigmaFill;
