import React, { useContext, useState } from 'react';
import { SelectComponent } from '../../components/SelectComponent';
import { Pagination } from '../../components/Pagination';
import { BlocksContext } from '../../components/Provider';
import { Table } from '../../components/Table';
import { Title } from '../../components/Title';
import styles from './Blocks.module.scss';
import { networkOptions, limitOptions, sortOptions } from '../../options/index';

const Blocks = () => {
  const [sort, setSort] = useState('');
  const sortHandler = (val) => setSort(val);
  const { handleLimit, totalCount, handlerNetwork } = useContext(BlocksContext);

  return (
    <div className={styles.blocks}>
      <Title className={styles.blocks__title}>Blocks list</Title>
      <div className={styles.blocks__options}>
        <SelectComponent
          title='limit'
          defaultValue={limitOptions[0]}
          options={limitOptions}
          handler={handleLimit}
        />
        <SelectComponent
          title='network'
          defaultValue={networkOptions[0]}
          options={networkOptions}
          handler={handlerNetwork}
        />
        <SelectComponent
          title='sort by'
          options={sortOptions}
          handler={sortHandler}
        />
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
