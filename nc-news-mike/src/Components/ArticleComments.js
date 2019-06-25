import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { Link } from "@reach/router";

class ArticleComments extends Component {
  state = { comments: [] };
  render() {
    return (
      <section>
        <Link to={`/articles/${this.props.article_id}`}>
          <button>
            Hide Comments{" "}
            <span role="img" aria-label="hide">
              ⬆️
            </span>
          </button>
        </Link>
        <ul>
          {this.state.comments.map(comment => (
            <CommentCard comment={comment} />
          ))}
        </ul>
      </section>
    );
  }
  componentDidMount = () => {
    api.getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default ArticleComments;
