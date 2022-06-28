import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navigation.css";

let link1 = () => {console.log("Accueil");};
let link2 = () => {console.log("Galerie");};
let link3 = () => {console.log("Contact");};

const Navigation = () => {
  return (
    <div
      style={{ backgroundColor: "#383838" }}
      className="d-flex justify-content-around first"
    >
      <div>
        <button onClick={link1} className="text-white m-3 ">
          Link 1
        </button>
        <button onMouseEnter={link2} className="text-white m-3 ">
          Link 2
        </button>
        <button onDoubleClick={link3} className="text-white m-3 ">
          Link 3
        </button>
      </div>
      <div className="m-auto me-5">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;
