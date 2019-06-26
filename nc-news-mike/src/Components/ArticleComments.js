import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { Link } from "@reach/router";
import AddCommentForm from "./AddCommentForm";

class ArticleComments extends Component {
  state = { comments: [] };
  render() {
    const { user, article_id } = this.props;
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
        <AddCommentForm
          comments={this.state.comments}
          article_id={article_id}
          user={user}
          addAComment={this.addAComment}
        />
        <ul>
          {this.state.comments.map(comment => (
            <CommentCard comment={comment} key={comment.comment_id} />
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

  addAComment = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };
}

export default ArticleComments;
