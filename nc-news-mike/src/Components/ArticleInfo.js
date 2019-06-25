import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleComments from "./ArticleComments";
import ShowCommentsButton from "./ShowCommentsButton";

class ArticleInfo extends Component {
  state = { article: {} };

  render() {
    return (
      <section>
        <ArticleCard article={this.state.article} />
        <br />
        {this.state.article.body}
        <br />
        <Router>
          <ShowCommentsButton
            path="/"
            article_id={this.state.article.article_id}
          />
          <ArticleComments path="comments" />
        </Router>
      </section>
    );
  }

  componentDidMount = () => {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default ArticleInfo;
