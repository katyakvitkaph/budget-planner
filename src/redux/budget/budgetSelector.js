export const getBudget = store => store.budget;

export const getExpence = store => store.expences;

export const calculateTotalExpenses = store => {
  return getExpence(store).reduce(
    (total, expence) => total + expence.amount,
    0,
  );
};

export const calculateBalance = store =>
  getBudget(store) - calculateTotalExpenses(store);
