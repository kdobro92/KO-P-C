import { Link } from "react-router-dom";
import { useState } from "react";

function Thumbnail() {
  const [image, setImage] = useState("img/main.png");

  return (
    <div className="main-container">
      <div className="main-thumbnail">
        <img src={image} alt="main" />
      </div>
      <div className="main-sub-container">
        <h1 className="main-sub">S-SRC METHOD OF CONSTRUCTION AND PROCESS</h1>
        <p className="main-small-sub">
          기성 H-형강 이용으로 수급이 용이하며 자재 중량 감소로 경제적이다.
        </p>
        <Link to="/performance">
          <button type="button" className="contact-btn">
            주요실적
          </button>
        </Link>
        <Link to="/about">
          <button type="button" className="read-btn">
            회사소개
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Thumbnail;
