import React from 'react';
import PropTypes from 'prop-types';

const HtmlFill = props => {
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
      <g clipPath="url(#clip0_950_633)">
        <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0z"></path>
        <path d="M9.656 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073z"></path>
        <path d="M12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0z"></path>
        <path d="M16.346 0h1.083v2.167h1.52v1.07h-2.603V0z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.046 22.072L3 4.717h18L18.953 22.07 11.99 24l-6.944-1.928zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.332l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571H9.183z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_950_633">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

HtmlFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HtmlFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HtmlFill;
