/* eslint-disable no-console */
import React, { createContext, useEffect, useReducer } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { Main } from '../Main';
import { Header } from '../Header';
import { getBlocksReduser } from '../../store/getBlocksReduser';
import { getBlocksData } from '../../api';
import { GETBLOCKS } from '../../store/types';
import { dataHandler } from '../../functions/dataHandler';

export const BlocksContext = createContext();

function App() {
  const [blocks, blocksDispatch] = useReducer(getBlocksReduser, []);
  const [pages, setPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const handlerOffset = (num) => {
    setOffset(num);
  };

  const handleLimit = (num) => {
    setLimit(num);
    setOffset(() => 0);
  };

  useEffect(async () => {
    const response = await getBlocksData(offset, limit);
    const handledBlocks = dataHandler(response.blocks);
    setTotalCount(response.totalCount);
    const nextPages = Math.ceil(totalCount / limit);
    setPages(nextPages);
    blocksDispatch({
      type: GETBLOCKS,
      blocks: handledBlocks,
    });
  }, [offset, limit]);

  const contextValue = {
    blocks,
    offset,
    handlerOffset,
    handleLimit,
    limit,
    pages,
    totalCount,
  };
  return (
    <BlocksContext.Provider value={contextValue}>
      <Router>
        <div className='App'>
          <Header />
          <Main />
        </div>
      </Router>
    </BlocksContext.Provider>
  );
}
export { App };
