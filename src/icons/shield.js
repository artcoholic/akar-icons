import React from 'react';
import PropTypes from 'prop-types';

const Shield = props => {
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
      id="Shield"
    >
      <path d="M12.537 21.658l3.02-1.921a12.587 12.587 0 005.529-13.35.787.787 0 00-.448-.548L12 2 3.362 5.839a.787.787 0 00-.448.548 12.587 12.587 0 005.53 13.35l3.02 1.921a1 1 0 001.073 0z"></path>
    </svg>
  );
};

Shield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Shield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Shield;
