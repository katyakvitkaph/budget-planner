import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import shortid from 'shortid';
import BudgetForm from './BudgetForm/BudgetForm';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpensesTable from './ExpensesTable/ExpensesTable';
import Values from './Values/Values';
import { getExpence } from '../redux/budget/budgetSelector';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
    </Container>
  );
};

const mapStateToProps = store => ({
  expences: getExpence(store),
});

App.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default connect(mapStateToProps)(App);
