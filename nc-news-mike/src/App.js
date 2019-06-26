import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import ArticleList from "./Components/ArticlesList";
import ArticleInfo from "./Components/ArticleInfo";
import TopicsList from "./Components/TopicsList";

class App extends React.Component {
  state = { user: "grumpy19" };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <ArticleList path="/articles" />
          <ArticleInfo path="/articles/:article_id/*" />
          <TopicsList path="/topics/*" />
        </Router>
      </div>
    );
  }
}

export default App;
