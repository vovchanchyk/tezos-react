import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BlocksContext } from '../../Provider';

const PaginationButton = ({ pageNumber, pageOffset, active, className }) => {
  const { handlerOffset } = useContext(BlocksContext);

  return (
    <button
      type='button'
      className={active ? className : ''}
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
  className: PropTypes.string,
};
PaginationButton.defaultProps = {
  active: false,
  className: '',
};
export { PaginationButton };
