import React from "react";

const initialState = {
  text: "",
  category: "Code"
};

class NewTaskForm extends React.Component {
  state = { ...initialState };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      ...initialState
    });
  };

  render() {
    const { categories } = this.props;
    return (
      <form
        onChange={this.handleChange}
        className="new-task-form"
        onSubmit={this.handleSubmit}
      >
        <input
          name="text"
          type="text"
          placeholder="new task text"
          value={this.state.text}
        />
        <select name="category" value={this.state.category}>
          {categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default NewTaskForm;
