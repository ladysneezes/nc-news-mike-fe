import React from "react";
import HomeButton from "./HomeButton";
import ArticlesButton from "./ArticlesButton";

const Header = () => {
  return (
    <header>
      <h1>Mike's NC News Outlet</h1>
      <HomeButton />
      <ArticlesButton />
    </header>
  );
};

export default Header;
