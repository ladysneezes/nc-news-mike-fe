import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import ArticleList from "./Components/ArticlesList";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <ArticleList path="/articles" />
        </Router>
      </div>
    );
  }
}

export default App;
