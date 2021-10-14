/* eslint-disable no-console */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BlocksContext } from '../App/App';
import { rowCreator } from '../../functions/rowCreator';
import { titlesCreator } from '../../functions/titlesCreator';
import styles from './Table.module.scss';
import { sortHandler } from '../../functions/sortHandler';

const Table = ({ sort }) => {
  const { blocks } = useContext(BlocksContext);
  if (!blocks.length) {
    return null;
  }

  const titles = titlesCreator(blocks);
  const sortedBlocks = sortHandler(sort, blocks);
  const rows = sortedBlocks.map((el) => rowCreator(el));

  return (
    <div className={styles.table}>
      <table>
        <thead className='table__head'>
          <tr className='table__row'>
            {titles.map((el) => (
              <th className={styles.table__cell} key={el}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='table__body'>
          {rows.map((row) => {
            const [id] = row;
            return (
              <tr key={id} className='table__row'>
                {row.map((cell) => (
                  <td className={styles.table__cell} key={id + cell}>
                    {cell || '_____'}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  sort: PropTypes.string.isRequired,
};

export { Table };
