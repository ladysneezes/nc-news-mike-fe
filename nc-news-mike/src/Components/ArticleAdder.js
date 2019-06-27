import React, { Component } from "react";
import * as api from "../api";

class ArticleAdder extends Component {
  state = { title: "", body: "", topic: "" };
  render() {
    const { title, body, topic } = this.state;
    return (
      // add topics as dropdown
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onchange={this.handleChange}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit Article.</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    api.postArticle(username, title, body).then(article => {
      //needs topic as well
      this.setState({ title: "", body: "", topic: "" });
      this.props.navigate(`article/${article_id}`);
    });
  };

  handleChange = event => {
    const { name, value } = this.event.target;
    this.setState({ [name]: value });
  };
}

export default ArticleAdder;
