import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <h2 className="teal lighten-2 white-text">MC News</h2>
      <nav className="navButtons">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </header>
  );
};

export default Header;
