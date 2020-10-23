import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
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
      id="Home"
    >
      <path d="M22 20v-8.688a2 2 0 00-.626-1.454l-8-7.56a2 2 0 00-2.748 0l-8 7.56A2 2 0 002 11.312V20a2 2 0 002 2h16a2 2 0 002-2z"></path>
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Home.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Home;
