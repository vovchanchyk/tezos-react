import React, { useContext } from 'react';
import styles from './Pagination.module.scss';
import { BlocksContext } from '../Provider';
import { PaginationButton } from './PaginationButton';
import { pagesDataCreator } from '../../functions/pagesDataCreator';

const Pagination = () => {
  const { offset, limit, totalCount, handlerOffset } =
    useContext(BlocksContext);
  const pages = Math.ceil(totalCount / limit);
  const currentPages = pagesDataCreator(offset, limit, pages);
  const handlePage = (val) => {
    if (offset === 0 && val < offset) return;
    if (currentPages[currentPages.length - 1].pageNumber === pages && pages)
      return;
    handlerOffset(val);
  };
  return (
    <div className={styles.pagination}>
      <button
        type='button'
        aria-label='button previos page'
        className={styles.prev}
        onClick={() => handlePage(offset - limit)}
      />
      {currentPages.map((el) => (
        <PaginationButton
          className={styles.active}
          key={el.pageNumber}
          pageNumber={el.pageNumber}
          active={el.active}
          pageOffset={el.pageOffset}
        />
      ))}
      <button
        type='button'
        aria-label='button next page'
        className={styles.next}
        onClick={() => handlePage(offset + limit)}
      />
    </div>
  );
};

export { Pagination };
