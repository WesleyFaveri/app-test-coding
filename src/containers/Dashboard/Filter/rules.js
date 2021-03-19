import {moment} from '@utils';

export const formatDate = date => moment(date).format('DD/MM/YYYY');
