import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import Error from "./Error";

class ArticlesList extends Component {
  state = {
    articles: [],
    error: null
  };
  render() {
    const { articles, error } = this.state;
    if (error) {
      return <Error error={error} />;
    }
    return (
      <ul>
        {articles.map(article => (
          <ArticleCard article={article} />
        ))}
      </ul>
    );
  }

  componentDidMount = () => {
    this.fetchArticles(this.props);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.slug !== this.props.slug) {
      return this.fetchArticles(this.props);
    }
  };

  fetchArticles = ({ slug }) => {
    return api
      .getArticles(slug)
      .then(res => {
        this.setState({ articles: res.articles });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default ArticlesList;
