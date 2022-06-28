import React from "react";
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div>
      <span className="text-white me-1">Search:</span>
      <input
        type="text"placeholder="Type your search"/>
      <button className="btn1">Go</button>
    </div>
  );
};

export default SearchBar;
