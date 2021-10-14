import dayjs from 'dayjs';

export const timeFormatHandler = (num) =>
  dayjs(num * 1000).format('YYYY.MM.DD  HH:mm:ss');
