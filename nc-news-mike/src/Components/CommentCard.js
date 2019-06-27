import React from "react";
import Voter from "./Voter";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, user, removeAComment }) => {
  const { comment_id, author, votes, body } = comment;
  return (
    <section key={comment_id}>
      <p>{body}</p>
      Author: {author}
      <br />
      <Voter comment_id={comment_id} votes={votes} />
      <br />
      <DeleteButton
        removeAComment={removeAComment}
        comment_id={comment_id}
        user={user}
        author={author}
      />
    </section>
  );
};

export default CommentCard;
