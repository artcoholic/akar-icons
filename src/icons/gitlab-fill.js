import React from 'react';
import PropTypes from 'prop-types';

const GitlabFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M22.749 9.769l-.031-.08-3.027-7.9a.788.788 0 0 0-.782-.495.81.81 0 0 0-.456.17.81.81 0 0 0-.268.408L16.14 8.125H7.865L5.822 1.872a.794.794 0 0 0-.269-.409.81.81 0 0 0-.926-.05c-.14.09-.25.22-.312.376L1.283 9.684l-.03.08a5.62 5.62 0 0 0 1.864 6.496l.01.008.028.02 4.61 3.453 2.282 1.726 1.39 1.049a.935.935 0 0 0 1.13 0l1.389-1.05 2.281-1.726 4.639-3.473.011-.01A5.623 5.623 0 0 0 22.75 9.77z"></path>
    </svg>
  );
};

GitlabFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default GitlabFill;
