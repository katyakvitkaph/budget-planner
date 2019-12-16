import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Value from '../Value/Value';
import {
  calculateTotalExpenses,
  calculateBalance,
  getBudget,
} from '../../redux/budget/budgetSelector';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expence, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expence} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = state => ({
  balance: calculateBalance(state),
  expence: calculateTotalExpenses(state),
  budget: getBudget(state),
});

export default connect(mapStateToProps)(Values);

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expence: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
