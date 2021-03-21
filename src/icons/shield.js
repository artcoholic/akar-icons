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
      <path d="M12.573 21.599l2.243-1.57a13.393 13.393 0 005.448-13.624.837.837 0 00-.453-.586L12 2 4.19 5.819a.837.837 0 00-.454.586 13.393 13.393 0 005.448 13.624l2.243 1.57a1 1 0 001.146 0z"></path>
    </svg>
  );
};

Shield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Shield.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Shield;
