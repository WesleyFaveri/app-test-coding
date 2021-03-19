const getFormatedAmount = (amount, removeMinus = false) => {
  let value = amount * 1;

  if (removeMinus && amount < 0) {
    value = value * -1;
  }

  return String(value).replace('.', ',');
};

export default getFormatedAmount;
