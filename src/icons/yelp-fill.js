import React from 'react';
import PropTypes from 'prop-types';

const YelpFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
        d="M4.98 11.264l4.701 2.278a1.075 1.075 0 0 1 .6 1.074 1.066 1.066 0 0 1-.81.927L4.393 16.8a1.088 1.088 0 0 1-1.187-.492 1.069 1.069 0 0 1-.146-.429 9.159 9.159 0 0 1 .424-3.996 1.07 1.07 0 0 1 .606-.645 1.085 1.085 0 0 1 .888.026z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.862 20.879l3.5-3.861a1.08 1.08 0 0 1 1.205-.277 1.076 1.076 0 0 1 .673 1.03l-.183 5.195a1.066 1.066 0 0 1-.396.793 1.083 1.083 0 0 1-.861.226 9.401 9.401 0 0 1-3.748-1.506 1.074 1.074 0 0 1-.46-.758 1.065 1.065 0 0 1 .27-.842z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.16 15.74l4.975 1.606a1.08 1.08 0 0 1 .657.596 1.064 1.064 0 0 1-.017.884 9.312 9.312 0 0 1-2.487 3.166 1.082 1.082 0 0 1-1.602-.258l-2.773-4.408a1.065 1.065 0 0 1 .065-1.226 1.078 1.078 0 0 1 1.182-.36z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.219 12.588l-5.029 1.433a1.085 1.085 0 0 1-1.169-.4A1.065 1.065 0 0 1 14 12.393l2.926-4.308a1.075 1.075 0 0 1 .755-.464 1.085 1.085 0 0 1 .85.257 9.222 9.222 0 0 1 2.379 3.25 1.069 1.069 0 0 1-.691 1.46z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.469.468a15.12 15.12 0 0 0-2.585.946 1.077 1.077 0 0 0-.564.65 1.063 1.063 0 0 0 .097.851l4.915 8.456a1.076 1.076 0 0 0 1.212.499 1.066 1.066 0 0 0 .799-1.034V1.072A1.065 1.065 0 0 0 11.622.06a1.084 1.084 0 0 0-.437-.057c-.918.072-1.826.228-2.715.465z"
      ></path>
    </svg>
  );
};

YelpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default YelpFill;
