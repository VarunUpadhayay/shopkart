import React from "react";
import image1 from "../images/studio.png";
import "../style/Body.css";

const Body = () => {
  return (
    <div className="main-body">
      <div className="side-text">
        <span className="line">Fresh</span>
        <br />
        <span className="line2">2022</span>
        <br />
        <span className="line3">Look</span>
      </div>

      <div className="image-container">
        <img src={image1} alt="jacket" className="image" />
      </div>

      <div className="seeMore">
        <span>see more</span>
        <i class="fa fa-arrow-right rotated-arrow" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Body;
