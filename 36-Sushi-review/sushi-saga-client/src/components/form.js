import React from "react";

export default class Form extends React.Component {
  state = {
    amount: null
  };

  handleOnChangeForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.topupBudget(parseInt(this.state.amount));
    this.setState({ amount: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="number"
          name="amount"
          value={this.state.amount}
          onChange={this.handleOnChangeForm}
        />
        <input type="submit" value="Top Up" />
      </form>
    );
  }
}
