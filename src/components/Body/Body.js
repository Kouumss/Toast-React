import React from "react";
import Header from "../Header/Header";
import Article from "../Article/Article";
import Footer from "../Footer/Footer";
import  "../Body/Body.css";

const Body = () => {
  return (
    <div className="body">
        <Header />
        <Article/>
        <Article/>
        <Footer/>
    </div>
  );
};

export default Body;
