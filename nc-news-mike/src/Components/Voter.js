import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = { voteChange: 0 };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <button
          id="upvote"
          disabled={voteChange > 0}
          onClick={() => this.handleVote(1)}
        >
          <span role="img" aria-label="upvote">
            👍
          </span>
        </button>
        <p>Votes:{votes + voteChange}</p>
        <button
          id="downvote"
          disabled={voteChange < 0}
          onClick={() => this.handleVote(-1)}
        >
          <span role="img" aria-label="downvote">
            👎
          </span>
        </button>
      </>
    );
  }
  handleVote = increment => {
    const { article_id } = this.props;
    api.patchArticleVotes(article_id, increment).catch(error => {
      console.log("error :", error);
      this.setState(({ voteChange }) => ({
        voteChange: voteChange - increment
      }));
    });
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + increment
    }));
  };
}

export default Voter;
