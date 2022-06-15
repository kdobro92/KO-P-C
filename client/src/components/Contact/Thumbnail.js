import React from "react";

function Thumbnail() {
  return (
    <>
      <div className="thumbnail-container">
        {/* <div className="lb-text">
          <h1 className="thumnail-sub">Contact us</h1>
        </div> */}
        <div className="lb-image">
          <img className="thumbnail-img" src="/img/contact.png" alt="contact" />
        </div>
      </div>
    </>
  );
}

export default Thumbnail;
