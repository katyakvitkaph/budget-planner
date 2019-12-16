import types from '../types';

export const addBudget = expence => ({
  type: types.ADD_BUDGET,
  payload: {
    expence,
  },
});

export const saveBudget = budget => ({
  type: types.SAVE_BUDGET,
  payload: {
    budget,
  },
});

export const deleteBudget = id => ({
  type: types.DELETE_BUDGET,
  payload: {
    id,
  },
});
