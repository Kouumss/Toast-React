import React from "react";
import Article from "../Article/Article";
import "../Body/Body.css";

let numberArticle = 2;
let monStyle = { maxHeight: `${window.innerHeight}px` };

const Body = () => {
  return (
    <div style={monStyle} className="body">
      {numberArticle >= 2 ? (
        <div>
          <Article />
          <Article />
        </div>
      ) : (
        <div className="titre">
          <h1>Désolé, il n'y a pas d'article pour l'instant..</h1>
        </div>
      )}
    </div>
  );
};

export default Body;
