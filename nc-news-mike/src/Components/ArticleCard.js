import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`articles/${article.article_id}`}>
      <li key={article.article_id}>
        Title: {article.title} <br />
        Author: {article.author} <br />
        Topic: {article.topic} <br />
      </li>
    </Link>
  );
};

export default ArticleCard;
