/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useContext } from 'react';
import styles from './Pagination.module.scss';
import { BlocksContext } from '../App/App';
import { PaginationButton } from '../PaginationButton';
import { pagesDataCreator } from '../../functions/pagesDataCreator';

const Pagination = () => {
  const { offset, limit, pages, handlerOffset } = useContext(BlocksContext);
  const currentPages = pagesDataCreator(offset, limit, pages);
  const handlePage = (num) => {
    if (offset === 0 && num < offset) return;
    if (currentPages[currentPages.length - 1].pageNumber === pages && pages)
      return;
    handlerOffset(num);
  };
  return (
    <div className={styles.pagination}>
      <button
        type='button'
        className={styles.prev}
        onClick={() => handlePage(offset - limit)}
      />
      {currentPages.map((el) => (
        <PaginationButton
          key={el.pageNumber}
          pageNumber={el.pageNumber}
          active={el.active}
          pageOffset={el.pageOffset}
        />
      ))}
      <button
        type='button'
        className={styles.next}
        onClick={() => handlePage(offset + limit)}
      />
    </div>
  );
};

export { Pagination };
