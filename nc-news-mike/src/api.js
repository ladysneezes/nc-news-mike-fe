import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://mikes-nc-news.herokuapp.com/api/articles/")
    .then(res => {
      return res.data;
    });
};
