import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = props => {
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
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="M12 10.016A2.794 2.794 0 0 0 9.857 9C8.28 9 7 10.343 7 12s1.28 3 2.857 3c.854 0 1.62-.393 2.143-1.016M17 12c0 1.657-1.28 3-2.857 3-1.578 0-2.857-1.343-2.857-3s1.279-3 2.857-3C15.72 9 17 10.343 17 12z"></path>
    </svg>
  );
};

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreditCard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreditCard;
