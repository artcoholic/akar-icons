import React from 'react';
import PropTypes from 'prop-types';

const QuestionFill = props => {
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-1.108 7.935c.23-.453.4-.668.541-.78.106-.084.25-.155.567-.155.625 0 1 .47 1 .978 0 .278-.054.416-.202.592-.207.246-.59.545-1.348 1.046l-.45.296V13a1 1 0 1 0 2 0v-1.017c.542-.374.997-.732 1.327-1.124.477-.566.673-1.17.673-1.881C15 7.508 13.867 6 12 6c-.684 0-1.289.176-1.808.587-.484.383-.814.91-1.084 1.445a1 1 0 1 0 1.784.903zM13 16.5a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0v-.5z"
      ></path>
    </svg>
  );
};

QuestionFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

QuestionFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default QuestionFill;
