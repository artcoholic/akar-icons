import React from 'react';
import PropTypes from 'prop-types';

const PhpFill = props => {
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
      <path d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5 12-2.855 12-6.5-5.271-6.5-12-6.5zm-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5l1.254-6zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986L5 9.5zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325L15.5 9.5zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.188.043-.427-.135-.812-.99-.812H6.135zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.188.043-.427-.134-.812-.99-.812h-1.031z"></path>
    </svg>
  );
};

PhpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PhpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PhpFill;
