import {moment} from '@utils';

export const verifyEarning = value => !!(value > 0);

export const getFormatedDate = date =>
  moment(date).format('DD/MM/YYYY - HH:mm');
