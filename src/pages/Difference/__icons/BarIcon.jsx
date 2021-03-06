import React from 'react';
import PropTypes from 'prop-types';

const BarIcon = ({ color }) => (
  <svg
    width='116'
    height='116'
    viewBox='0 0 116 116'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M58 106.333V58'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M87 106.333V29'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M29 106.333V87'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

BarIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BarIcon;
