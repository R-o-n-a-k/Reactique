import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-msg">
        <h1>404</h1>
        <h3>Page Not Found!</h3>
        <p>
          The specified file was not found on this website. Please check the URL
          for any mistakes and try again.
        </p>
        <Link to="/">
          <button className="notFound-button">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
