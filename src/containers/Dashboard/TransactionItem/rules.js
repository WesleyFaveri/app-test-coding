import {moment} from '@utils';

export const verifyEarning = value => !!(value > 0);
export const formatDate = date => moment(date).format('DD/MM/YYYY');
