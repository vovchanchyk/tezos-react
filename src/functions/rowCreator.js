import { inTezosHandler } from './inTezosHandler';
import { timeFormatHandler } from './timeFormatHandler';

export const rowCreator = (object) => {
  const copyOfObject = { ...object };
  copyOfObject.created = timeFormatHandler(copyOfObject.created);
  copyOfObject.volume = inTezosHandler(copyOfObject.volume);
  copyOfObject.fees = inTezosHandler(copyOfObject.fees);

  return Object.values(copyOfObject);
};
