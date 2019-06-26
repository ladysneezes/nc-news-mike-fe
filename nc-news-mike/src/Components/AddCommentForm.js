import React, { Component } from "react";
import * as api from "../api";

class AddCommentForm extends Component {
  state = { userInput: "" };
  render() {
    return (
      <form onSubmit={this.handleCommentFormSubmit}>
        <input
          placeholder="What do you think?"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit.</button>
      </form>
    );
  }

  handleCommentFormSubmit = event => {
    event.preventDefault();
    const { user, article_id, addAComment } = this.props;
    const body = this.state.userInput;
    this.setState({ userInput: "" });
    api.postComment(article_id, user, body).then(comment => {
      addAComment(comment);
    });
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ userInput: value });
  };
}

export default AddCommentForm;
