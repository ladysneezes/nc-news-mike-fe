import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <h1>Mike's News Outlet</h1>
      <nav className="navButtons">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </header>
  );
};

export default Header;
