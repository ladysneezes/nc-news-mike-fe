import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id}>
      <h4>
        Title:
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </h4>
      <br />
      Author: {article.author} Topic: {article.topic} <br />
      Comment Count: {article.comment_count}
      <br /> <Voter article_id={article.article_id} votes={article.votes} />
      <br />
    </section>
  );
};

export default ArticleCard;
