import React from "react";
import LoaderIcon from "/src/assets/images/SUN_svg.svg";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="flex flex-col items-center">
        <img src={LoaderIcon} alt="Loading..." className="loader-icon" />
        <span className="loader-text">Loading...</span>
      </div>
    </div>
  );
}
