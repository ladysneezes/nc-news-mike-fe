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
      console.log(res.data);
      return res.data;
    });
};
