import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import Error from "./Error";

class ArticlesList extends Component {
  state = {
    articles: [],
    error: null,
    sort_by: null
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
        <ul>
          {articles.map(article => (
            <ArticleCard article={article} />
          ))}
        </ul>
      </section>
    );
  }

  handleSortChange = event => {
    const sort_by = event.target.value;
    console.log(sort_by);
    this.setState({ sort_by });
  };

  componentDidMount = () => {
    this.fetchArticles(this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.slug !== this.props.slug) {
      return this.fetchArticles({ ...this.props, ...this.state });
    }
    if (prevState.sort_by !== this.state.sort_by) {
      return this.fetchArticles({ ...this.props, ...this.state });
    }
  };

  fetchArticles = ({ slug, sort_by }) => {
    return api
      .getArticles(slug, sort_by)
      .then(res => {
        this.setState({ articles: res.articles });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default ArticlesList;
