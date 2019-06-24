import React, { Component } from "react";
import * as api from "../api";

class ArticleInfo extends Component {
  state = { article: {} };

  render() {
    const { article_id } = this.state;
    return <p>HELLO</p>;
  }
  componentDidMount = () => {
    api.getArticleById(this.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default ArticleInfo;
