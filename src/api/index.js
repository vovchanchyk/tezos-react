/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';
import { ROOTURL } from './config';

export const getBlocksData = async (network, offset, limit) => {
  const url = `${ROOTURL}/${network}/blocks?offset=${offset}&limit=${limit}`
  const ress = await axios.get(url);
  return {
    blocks:ress.data,
    totalCount: ress.headers['x-total-count'],
  }
};
