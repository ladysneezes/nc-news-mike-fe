import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment }) => {
  let { comment_id, author, votes, body } = comment;
  return (
    <section key={comment_id}>
      <p>{body}</p>
      Author: {author}
      <br />
      <Voter comment_id={comment_id} votes={votes} />
    </section>
  );
};

export default CommentCard;
