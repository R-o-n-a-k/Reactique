import React from "react";
import "./ComingSoon.css";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="comingSoon">
      <h1 className="coming-title">Coming Soon!</h1>
      <p className="coming-desc">
        Working on this... Till then, check out my other
        <a
          href="https://ronakjpatel.in"
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
        >
          work
        </a>
        .
      </p>
      <Link to="/" className="home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
