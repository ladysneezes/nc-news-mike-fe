import React from "react";
import { Link } from "@reach/router";

const ShowCommentsButton = props => {
  let { article_id } = props;
  return (
    <Link to={`/articles/${article_id}/comments`}>
      <button>
        Show comments
        <span role="img" aria-label="show">
          ⬇️
        </span>
      </button>
    </Link>
  );
};

export default ShowCommentsButton;
