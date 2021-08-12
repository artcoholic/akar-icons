import React from 'react';
import PropTypes from 'prop-types';

const VkFill = props => {
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
        d="M23.45 5.948c.166-.546 0-.948-.795-.948H20.03c-.668 0-.976.347-1.143.73 0 0-1.335 3.196-3.226 5.272-.612.602-.89.793-1.224.793-.167 0-.418-.191-.418-.738V5.948c0-.656-.184-.948-.74-.948H9.151c-.417 0-.668.304-.668.593 0 .621.946.765 1.043 2.513v3.798c0 .833-.153.984-.487.984-.89 0-3.055-3.211-4.34-6.885C4.45 5.288 4.198 5 3.527 5H.9c-.75 0-.9.347-.9.73 0 .682.89 4.07 4.145 8.551C6.315 17.341 9.37 19 12.153 19c1.669 0 1.875-.368 1.875-1.003v-2.313c0-.737.158-.884.687-.884.39 0 1.057.192 2.615 1.667C19.11 18.216 19.403 19 20.405 19h2.625c.75 0 1.126-.368.91-1.096-.238-.724-1.088-1.775-2.215-3.022-.612-.71-1.53-1.475-1.809-1.858-.389-.491-.278-.71 0-1.147 0 0 3.2-4.426 3.533-5.929z"
      ></path>
    </svg>
  );
};

VkFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VkFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VkFill;
