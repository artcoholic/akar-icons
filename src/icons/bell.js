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
      id="Bell"
    >
      <path d="M12 4V2M3 19h18l-1.328-1.992a4 4 0 01-.672-2.22V10c-.04-3.293-2.867-5.99-6.267-5.998L11.243 4C7.842 3.99 5.022 6.708 5 10v4.789a4 4 0 01-.672 2.219L3 19zm12 .007A2.956 2.956 0 0112 22c-1.71-.004-2.996-1.35-3-3.008l6 .015z"></path>
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
