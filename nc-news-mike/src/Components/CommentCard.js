import React from "react";

const CommentCard = ({ comment }) => {
  let { comment_id, author, votes, body } = comment;
  return (
    <section key={comment_id}>
      <p>{body}</p>
      Author: {author} <br />
      Votes: {votes}
      <button value={1} />
      <br />
    </section>
  );
};

export default CommentCard;
