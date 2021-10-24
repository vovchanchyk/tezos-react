/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BlocksContext } from '../Provider';
import { titlesCreator } from '../../functions/titlesCreator';
import styles from './Table.module.scss';
import { sortHandler } from '../../functions/sortHandler';

const cellsCreator = (object, rowindex) => {
  let row;
  if (!Array.isArray(object)) {
    row = Object.values(object);
  } else {
    row = object;
  }

  return (
    <tr key={`row-${rowindex}`} className={styles.table__row}>
      {row.map((cell, cellindex) => (
        <td
          className={styles.table__cell}
          key={`cell-${rowindex}-${cellindex}`}
        >
          {cell || '___'}
        </td>
      ))}
    </tr>
  );
};

const Table = ({ sort }) => {
  const { blocks } = useContext(BlocksContext);
  if (!blocks.length) {
    return null;
  }
  const titles = cellsCreator(titlesCreator(blocks));
  const sortedBlocks = sortHandler(sort, blocks);

  const rows = sortedBlocks.map((block, i) => cellsCreator(block, i));

  return (
    <div className={styles.table}>
      <table>
        <thead className='table__head'>{titles}</thead>
        <tbody className='table__body'>{rows}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  sort: PropTypes.string.isRequired,
};

export { Table };
