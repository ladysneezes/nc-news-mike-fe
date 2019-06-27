import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id}>
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
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
