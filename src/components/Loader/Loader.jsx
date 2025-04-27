import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
