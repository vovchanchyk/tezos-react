/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';
import { ROOTURL } from './config';

export const getBlocksData = async (offset, limit) => {
  const ress = await axios.get(
    `${ROOTURL}/blocks?offset=${offset}&limit=${limit}`,
  );
  return {
    blocks:ress.data,
    totalCount: ress.headers['x-total-count'],
  }
};
