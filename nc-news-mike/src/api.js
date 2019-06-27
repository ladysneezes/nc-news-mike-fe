import axios from "axios";

export const getArticles = (topic, sort_by, order) => {
  return axios
    .get("https://mikes-nc-news.herokuapp.com/api/articles/", {
      params: { topic: topic, sort_by: sort_by, order: order }
    })
    .then(res => {
      return res.data;
    });
};
export const getTopics = () => {
  return axios
    .get("https://mikes-nc-news.herokuapp.com/api/topics/")
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

export const patchArticleVotes = (article_id, increment) => {
  return axios
    .patch(`https://mikes-nc-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: increment
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const patchCommentVotes = (comment_id, increment) => {
  return axios
    .patch(`https://mikes-nc-news.herokuapp.com/api/comments/${comment_id}`, {
      inc_votes: increment
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(
      `https://mikes-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      { username: username, body: body }
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const postArticle = (username, title, body) => {
  return axios
    .post(`https://mikes-nc-news.herokuapp.com/api/articles/`, {
      author: username,
      body: body,
      tite: title
    })
    .then(({ data }) => {
      return data.article;
    })
    .catch(error => {
      console.dir(error); //still needs handling
    });
};

export const deleteComment = comment_id => {
  return axios
    .delete(`https://mikes-nc-news.herokuapp.com/api/comments/${+comment_id}`)
    .catch(error => {
      return error;
    });
};
