import React from "react";
import "../HomeCss/Intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="introduction">
          <h1>React Projects</h1>
          <p>
            Some of the things I built to practice & fulfill my childish dream
            of:
          </p>
          <span>"Having my website live on the internet"</span>
        </div>
        <button onClick={() => window.open("http://ronakjpatel.in/", "_blank")}>
          Meet the creator
        </button>
        <a href="#web-creations">
          <i className="fas fa-chevron-down" />
        </a>
      </div>
    </>
  );
};

export default Intro;
