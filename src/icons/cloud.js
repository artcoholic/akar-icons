import React from 'react';
import PropTypes from 'prop-types';

const Cloud = props => {
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
      id="Cloud"
    >
      <path d="M15.83 9.138A5 5 0 1117 19H6a4 4 0 01-.966-7.883m10.796-1.98a5.5 5.5 0 00-10.796 1.98m10.796-1.98L14.5 9.5m-9.466 1.617S5.188 12 5.5 12.5"></path>
    </svg>
  );
};

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cloud;
