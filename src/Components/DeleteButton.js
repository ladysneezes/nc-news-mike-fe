import React from "react";

const DeleteButton = props => {
  const { comment_id, removeAComment, user, author } = props;
  const handleDelete = comment_id => {
    removeAComment(comment_id);
  };
  return (
    <>
      <button
        className="waves-effect waves-light btn"
        disabled={user !== author}
        onClick={() => {
          handleDelete(comment_id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
