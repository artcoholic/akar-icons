import React from 'react';
import PropTypes from 'prop-types';

const TwitchFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1H2.547zm18.39 12.478l-3.438 3.283H12l-2.922 2.791v-2.79h-4.64V2.97h16.499v10.508zm-3.438-6.731v5.74h-2.062v-5.74H17.5zm-5.499 0v5.74H9.938v-5.74H12z"
      ></path>
    </svg>
  );
};

TwitchFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TwitchFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TwitchFill;
