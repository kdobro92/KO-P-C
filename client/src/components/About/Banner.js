import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="wrap">
      <div className="about-container">
        <img src="/img/contact.png" alt="meeting" className="intro-img" />
        <div className="intro-container">
          <h2 className="intro-title">회사소개</h2>
        </div>
        <div className="banner-container">
          <div className="banner-inner">
            <div className="banner-menu">
              <Link to="/about">
                <span className="banner">인사말</span>
              </Link>
              <span>/</span>
              <Link to="/greeting">
                <span className="banner">연혁</span>
              </Link>
              <span>/</span>
              <Link to="/contact">
                <span className="banner">오시는 길</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
