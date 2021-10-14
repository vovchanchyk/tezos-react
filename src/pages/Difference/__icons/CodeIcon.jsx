import React from 'react';
import PropTypes from 'prop-types';

const CodeIcon = ({ color }) => (
  <svg
    width='116'
    height='116'
    viewBox='0 0 116 116'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M77.333 87L106.333 58L77.333 29'
      stroke={color}
      strokeWidth='9.66667'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M38.667 29L9.66699 58L38.667 87'
      stroke={color}
      strokeWidth='9.66667'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

CodeIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default CodeIcon;
