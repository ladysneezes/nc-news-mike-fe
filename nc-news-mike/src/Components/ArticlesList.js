import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import Error from "./Error";

class ArticlesList extends Component {
  state = {
    articles: [],
    error: null,
    sort_by: null,
    order: null
  };

  render() {
    const { articles, error } = this.state;
    if (error) {
      return <Error error={error} />;
    }

    return (
      <section>
        <select name="sort_by dropdown" onChange={this.handleSortChange}>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <select name="order dropdown" onChange={this.handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <ul>
          {articles.map(article => (
            <ArticleCard article={article} />
          ))}
        </ul>
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchArticles({ ...this.props, ...this.state });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.slug !== this.props.slug) {
      return this.fetchArticles({ ...this.props, ...this.state });
    }
    if (prevState.sort_by !== this.state.sort_by) {
      return this.fetchArticles({ ...this.props, ...this.state });
    }
    if (prevState.order !== this.state.order) {
      return this.fetchArticles({ ...this.props, ...this.state });
    }
  };

  handleSortChange = event => {
    const sort_by = event.target.value;
    this.setState({ sort_by });
  };

  handleOrderChange = event => {
    const order = event.target.value;
    this.setState({ order });
  };

  fetchArticles = ({ slug, sort_by, order }) => {
    return api
      .getArticles(slug, sort_by, order)
      .then(res => {
        this.setState({ articles: res.articles });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default ArticlesList;
