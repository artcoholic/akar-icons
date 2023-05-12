import React from 'react';
import PropTypes from 'prop-types';

const ProductHuntFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_2601_269)">
        <path d="M15.402 10.2c0 .992-.808 1.8-1.8 1.8H10.2V8.4h3.402c.992 0 1.8.808 1.8 1.8zM24 12c0 6.629-5.371 12-12 12S0 18.629 0 12 5.371 0 12 0s12 5.371 12 12zm-6.198-1.8c0-2.318-1.883-4.2-4.2-4.2H7.8v12h2.4v-3.6h3.402c2.317 0 4.2-1.882 4.2-4.2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2601_269">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ProductHuntFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ProductHuntFill;
