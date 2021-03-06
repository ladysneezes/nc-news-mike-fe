import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id}>
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue lighten-5">
            <div className="card-content blue-grey-text text-darken-4">
              <span className="card-title">
                <h6>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </h6>
              </span>
              <p>
                Author: {article.author}
                <br /> Topic: {article.topic} <br />
                Comment Count: {article.comment_count}
              </p>
            </div>
            <div className="card-action">
              <Voter article_id={article.article_id} votes={article.votes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
