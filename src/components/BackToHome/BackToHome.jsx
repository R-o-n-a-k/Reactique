import React from "react";
import { Link } from "react-router-dom";
import "./BackToHome.css";

const BackToHome = () => {
  return (
    <>
      <Link to="/">
        <i className="fa-solid fa-house back-to-home" />
      </Link>
    </>
  );
};

export default BackToHome;
