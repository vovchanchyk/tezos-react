import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { Pagination } from '../../components/Pagination';
import { Table } from '../../components/Table';
import { Title } from '../../components/Title';
import { BlocksContext } from '../../components/App/App';
import styles from './Blocks.module.scss';

const Blocks = () => {
  const [sort, setSort] = useState('');
  const options = [
    { value: 10, label: 10 },
    { value: 30, label: 30 },
    { value: 50, label: 50 },
    { value: 70, label: 70 },
    { value: 100, label: 100 },
  ];
  const sortOptions = [{ value: 'endorsements', label: 'endoserments' }];
  const networkOptions = [{ value: 'mainnet', label: 'mainnet' }];
  const { limit, handleLimit, totalCount, handlerNetwork, network } =
    useContext(BlocksContext);

  return (
    <div className={styles.blocks}>
      <Title className={styles.blocks__title}>Blocks list</Title>
      <div className={styles.blocks__options}>
        <div className={styles.blocks__option}>
          <span className={styles.blocks__subtitle}>network is {network}</span>
          <Select
            className={styles.blocks__select}
            defaultValue={networkOptions[0]}
            options={networkOptions}
            onChange={(e) => handlerNetwork(e.value)}
          />
        </div>
        <div className={styles.blocks__option}>
          <span className={styles.blocks__subtitle}>
            {limit} items per page
          </span>
          <Select
            defaultValue={options[0]}
            className={styles.blocks__select}
            options={options}
            onChange={(e) => handleLimit(e.value)}
          />
        </div>
        <div className={styles.blocks__option}>
          <span className={styles.blocks__subtitle}>sort by {sort}</span>
          <Select
            className={styles.blocks__select}
            options={sortOptions}
            onChange={(e) => setSort(e.value)}
          />
        </div>
      </div>

      <div className={styles.blocks__pagination}>
        <Pagination />
      </div>
      <span className={styles.blocks__subtitle}>
        total number of blocks is {totalCount}
      </span>
      <div className={styles.blocks__table}>
        <Table sort={sort} />
      </div>
    </div>
  );
};

export { Blocks };
