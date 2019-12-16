import { combineReducers } from 'redux';
import { budgetReducer, expencesReducer } from './budget/budgetReducers';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expences: expencesReducer,
});

export default rootReducer;
