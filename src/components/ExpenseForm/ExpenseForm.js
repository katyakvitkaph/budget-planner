import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { addBudget } from '../../redux/budget/budgetActions';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSave } = this.props;
    const { name, amount } = this.state;
    onSave({ name, amount: Number(amount), id: shortid.generate() });

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: expence => dispatch(addBudget(expence)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
