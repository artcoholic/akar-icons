import React from 'react';
import PropTypes from 'prop-types';

const VscodeFill = props => {
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
      <path d="M.228 8.37s-.584-.427.117-.995L1.98 5.897s.467-.497.962-.064l15.081 11.542v5.534s-.007.87-1.11.774L.227 8.369z"></path>
      <path d="M4.116 11.937L.228 15.509s-.4.3 0 .837l1.805 1.66s.429.465 1.062-.065l4.121-3.158-3.1-2.846z"></path>
      <path d="M10.94 11.966l7.13-5.502-.047-5.505s-.305-1.202-1.32-.576L7.216 9.11l3.724 2.856z"></path>
      <path d="M16.912 23.69c.414.428.916.288.916.288l5.556-2.767c.711-.49.611-1.098.611-1.098V3.588c0-.726-.735-.977-.735-.977L18.444.264c-1.052-.657-1.741.119-1.741.119s.886-.645 1.32.576v21.85c0 .15-.032.297-.095.43-.127.259-.402.5-1.062.4l.046.051z"></path>
    </svg>
  );
};

VscodeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VscodeFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VscodeFill;
