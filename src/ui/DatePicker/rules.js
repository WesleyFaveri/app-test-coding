import {moment} from '@utils';

const FORMAT = 'YYYY-MM-DD HH:mm:ss.SSSS';

export const dateToFormated = (date, format) => {
  if (!date) {
    return null;
  }

  return moment(date, format).format(FORMAT);
};

export const formatedToDate = date => {
  if (!date) {
    return null;
  }

  return moment(date, FORMAT).toDate();
};
