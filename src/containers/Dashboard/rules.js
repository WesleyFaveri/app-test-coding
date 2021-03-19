import {moment} from '@utils';

export const getTransactions = (transactions, showAll, filter) =>
  filterTransactions(sortTransactions(transactions), filter).slice(
    0,
    showAll ? transactions.length : 3,
  );

const sortTransactions = transactions =>
  transactions.sort(
    (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
  );

const filterTransactions = (transactions, filter) => {
  if (filter) {
    const filterValue = moment(filter).format('DD/MM/YYYY');

    return transactions.filter(
      item => moment(item.date).format('DD/MM/YYYY') === filterValue,
    );
  }

  return transactions;
};
