import types from '../types';

export const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SAVE_BUDGET:
      return state + action.payload.budget;

    default:
      return state;
  }
};

export const expencesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_BUDGET:
      return [...state, action.payload.expence];

    case types.DELETE_BUDGET:
      return state.filter(el => el.id !== action.payload.id);

    default:
      return state;
  }
};
