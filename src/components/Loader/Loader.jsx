import React from "react";
import "./Loader.css";
import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <ColorRing
        visible={true}
        height={50}
        width={50}
        // radius={5}
        color="#9B5DE5"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        colors={["#9B5DE5", "#9B5DE5", "#CBA6F7", "#B0B3B8", "#4F4F4F"]}
      />
    </>
  );
}

export default Loader;
