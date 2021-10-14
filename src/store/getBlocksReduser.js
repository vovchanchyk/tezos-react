/* eslint-disable no-debugger */
import { GETBLOCKS } from './types';

export const getBlocksReduser = (state, action) => {
  switch (action.type) {
    case GETBLOCKS:
      return action.blocks;

    default:
      return state;
  }
};
