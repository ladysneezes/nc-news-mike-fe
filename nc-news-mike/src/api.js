import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://mikes-nc-news.herokuapp.com/api/articles/")
    .then(res => {
      return res.data;
    });
};

export const getArticleById = article_id => {
  return axios
    .get(`https://mikes-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(res => {
      return res.data.article;
    });
};

export const getArticleComments = article_id => {
  return axios
    .get(
      `https://mikes-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(res => {
      return res.data.comments;
    });
};
