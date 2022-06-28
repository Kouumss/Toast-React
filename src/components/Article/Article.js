import React from "react";
import tartine1 from "./asset/tartine1.jpg";
import "./Article.css";


const Article = () => {
  return (
    <div className="article">
      <div className="d-left">
        <img src={tartine1} alt="toast" className="img-fluid" />
      </div>
      <div className="d-right">
        <button className="bg-white">Quel est le titre ?</button>
        <h1>Mon premier article</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Article;
