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
        <h1 className="main-sub">YOUR BEST BUSINESS PARTNER</h1>
        <p className="main-small-sub">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <Link to="/contact">
          <button type="button" className="contact-btn">
            Contact us
          </button>
        </Link>
        <Link to="/about">
          <button type="button" className="read-btn">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Thumbnail;
