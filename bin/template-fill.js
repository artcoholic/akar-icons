const defaultAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 'size',
  height: 'size',
  viewBox: '0 0 24 24',
  fill: 'color',
  otherProps: '...otherProps',
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const ${ComponentName} = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ${ComponentName}.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ${ComponentName}
`

module.exports = { defaultAttrs, getElementCode }
