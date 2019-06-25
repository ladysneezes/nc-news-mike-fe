import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id}>
      <h4>
        Title:
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </h4>
      <br />
      Author: {article.author} Topic: {article.topic} <br />
      Comment Count: {article.comment_count} Votes: {article.votes}
      <button value={1}>1up!</button>
      <br />
    </section>
  );
};

export default ArticleCard;
