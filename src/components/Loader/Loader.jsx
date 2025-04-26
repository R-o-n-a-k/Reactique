import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <>
      <div className="loader-container">
        <div class="loader">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
