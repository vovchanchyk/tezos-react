export const dataHandler = (data) =>
  data.map((block) => ({
    blockId: block.level,
    backer: block.bakerName,
    created: block.timestamp,
    '# of operations': block.number_of_operations,
    volume: block.volume,
    fees: block.fees,
    endorsements: block.endorsements,
  }));
