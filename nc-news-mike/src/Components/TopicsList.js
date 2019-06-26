import React, { Component } from "react";
import * as api from "../api";
import { Link, Router } from "@reach/router";
import ArticlesList from "./ArticlesList";

class TopicsList extends Component {
  state = { topics: [] };
  render() {
    const { topics } = this.state;
    return (
      <section>
        {topics.map(topic => (
          <Link to={`/topics/${topic.slug}`}>
            <button>{`${topic.slug}`}</button>
          </Link>
        ))}

        <Router>
          <ArticlesList path=":slug" topic={`${this.props.slug}`} />
        </Router>
      </section>
    );
  }
  componentDidMount = () => {
    api.getTopics().then(res => {
      this.setState({ topics: res.topics });
    });
  };
}

export default TopicsList;
