import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../shared/Button';
import { deleteBudget } from '../../redux/budget/budgetActions';
import { getExpence } from '../../redux/budget/budgetSelector';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], deleteB }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => deleteB(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteB: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ items: getExpence(state) });

const mapDispatchToProps = dispatch => ({
  deleteB: id => dispatch(deleteBudget(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
