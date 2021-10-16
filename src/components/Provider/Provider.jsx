import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlocksData } from '../../api';
import { dataHandler } from '../../functions/dataHandler';

export const BlocksContext = createContext();
const Provider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [totalCount, setTotalCount] = useState('');
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
    setBlocks(handledBlocks);
  }, [offset, limit, network]);

  const contextValue = {
    blocks,
    offset,
    handlerOffset: (val) => setOffset(val),
    handleLimit,
    limit,
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
