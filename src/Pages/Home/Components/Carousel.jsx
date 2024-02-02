import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <img src="./images/spiderman.jpg" alt="" />
      <div className="buttons">
        <button className="btn">
          <img src="./icons/play.png" alt="" />
          Play
        </button>
        <button className="btn-secondary">
          <img src="./icons/info.png" alt="" />
          More info
        </button>
      </div>
    </div>
  );
}
