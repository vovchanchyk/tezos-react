import React, { createContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlocksReduser } from '../../store/getBlocksReduser';
import { getBlocksData } from '../../api';
import { GETBLOCKS } from '../../store/types';
import { dataHandler } from '../../functions/dataHandler';

export const BlocksContext = createContext();
const Provider = ({ children }) => {
  const [blocks, blocksDispatch] = useReducer(getBlocksReduser, []);
  const [pages, setPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [network, setNetwork] = useState('mainnet');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleLimit = (val) => {
    setLimit(val);
    setOffset(() => 0);
  };

  useEffect(async () => {
    const response = await getBlocksData(network, offset, limit);
    const handledBlocks = dataHandler(response.blocks);
    setTotalCount(response.totalCount);
    const nextPages = Math.ceil(totalCount / limit);
    setPages(nextPages);
    blocksDispatch({
      type: GETBLOCKS,
      blocks: handledBlocks,
    });
  }, [offset, limit, network]);

  const contextValue = {
    blocks,
    offset,
    handlerOffset: (val) => setOffset(val),
    handleLimit,
    limit,
    pages,
    totalCount,
    handlerNetwork: (networkOption) => setNetwork(networkOption),
    network,
  };

  return (
    <BlocksContext.Provider value={contextValue}>
      {children}
    </BlocksContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { Provider };
