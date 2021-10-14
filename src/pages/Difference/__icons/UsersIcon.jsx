import React from 'react';
import PropTypes from 'prop-types';

const UsersIcon = ({ color }) => (
  <svg
    width='116'
    height='116'
    viewBox='0 0 116 116'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M82.1668 101.5V91.8333C82.1668 86.7058 80.1299 81.7883 76.5042 78.1626C72.8785 74.5369 67.961 72.5 62.8335 72.5H24.1668C19.0393 72.5 14.1218 74.5369 10.4961 78.1626C6.8704 81.7883 4.8335 86.7058 4.8335 91.8333V101.5'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M43.5003 53.1667C54.1778 53.1667 62.8337 44.5108 62.8337 33.8333C62.8337 23.1558 54.1778 14.5 43.5003 14.5C32.8228 14.5 24.167 23.1558 24.167 33.8333C24.167 44.5108 32.8228 53.1667 43.5003 53.1667Z'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M111.167 101.5V91.8333C111.164 87.5496 109.738 83.3884 107.114 80.0028C104.489 76.6173 100.815 74.1992 96.667 73.1283'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M77.333 15.1283C81.4917 16.1931 85.1777 18.6117 87.8099 22.0028C90.4422 25.3939 91.8709 29.5646 91.8709 33.8575C91.8709 38.1503 90.4422 42.321 87.8099 45.7121C85.1777 49.1032 81.4917 51.5218 77.333 52.5866'
      stroke={color}
      strokeWidth='9'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

UsersIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default UsersIcon;
