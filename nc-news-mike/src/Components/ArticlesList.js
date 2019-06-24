import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticlesList extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <ul>
        {this.state.articles.map(article => (
          <ArticleCard article={article} />
        ))}
      </ul>
    );
  }

  componentDidMount = () => {
    this.api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default ArticlesList;
