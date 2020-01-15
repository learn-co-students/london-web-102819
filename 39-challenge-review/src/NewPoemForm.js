import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: ""
  };

  handleChange = e => {
    // console.log("handleChange", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { title, author, content } = this.state;
    return (
      <form
        className="new-poem-form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <input placeholder="Title" value={title} name="title" />
        <input placeholder="Author" value={author} name="author" />
        <textarea
          placeholder="Write your masterpiece here..."
          rows={10}
          value={content}
          name="content"
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
