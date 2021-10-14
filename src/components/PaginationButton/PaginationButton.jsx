import './PaginationButton.scss';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BlocksContext } from '../Provider';

const PaginationButton = ({ pageNumber, pageOffset, active }) => {
  const { handlerOffset } = useContext(BlocksContext);
  const className = active ? 'active' : 'no-active';
  return (
    <button
      type='button'
      className={className}
      onClick={() => handlerOffset(pageOffset)}
    >
      {pageNumber}
    </button>
  );
};
PaginationButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  pageOffset: PropTypes.number.isRequired,
  active: PropTypes.bool,
};
PaginationButton.defaultProps = {
  active: false,
};
export { PaginationButton };
