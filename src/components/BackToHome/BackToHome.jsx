import React from "react";
import { Link } from "react-router-dom";
import "./BackToHome.css";

const BackToHome = ({ bgColor = "#9B5DE5", bottom = "10%" }) => {
  return (
    <>
      <Link to="/">
        <i
          className="fa-solid fa-house back-to-home"
          style={{ backgroundColor: bgColor, bottom: bottom }}
        />
      </Link>
    </>
  );
};

export default BackToHome;
