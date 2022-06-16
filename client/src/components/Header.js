import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaRegEdit } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

function Header() {
  const location = useLocation();
  const inSection = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  // 헤더 숨길 경로
  const hideHeader = ["/login", "/signup"];
  if (hideHeader.includes(location.pathname)) {
    return null;
  }

  if (isLogin) {
    return (
      <header className={scrollPosition ? "header-active" : ""}>
        <div className="inner">
          <div className="navbar">
            <div className="navbar_logo" aria-hidden="true">
              <Link to="/">Ko-P&C</Link>
            </div>
            <ul className="navbar_menu">
              <div className="drop-menu " ref={inSection}>
                <div
                  className="profile"
                  role="presentation"
                  onClick={() => setIsLogin(!isLogin)}
                />
                <div className={isLogin ? "list active" : "list"}>
                  <h3>
                    님 <br />
                    <span>환영합니다!</span>
                  </h3>
                  <ul role="presentation" onClick={() => setIsLogin(false)}>
                    <li>
                      <FaUserCircle size="20" color="grey" className="icon" />
                      <Link to="/mypage/edit">마이페이지</Link>
                    </li>
                    <li>
                      <FaRegEdit size="20" color="grey" className="icon" />
                      <Link to="/mylist">내가쓴글</Link>
                    </li>
                    <li>
                      <RiLogoutBoxRLine
                        size="20"
                        color="grey"
                        className="icon"
                      />
                      <Link to="/">로그아웃</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className={scrollPosition ? "header-active" : ""}>
      <div className="inner">
        <div className="navbar">
          <div className="navbar_logo">
            <Link to="/">Ko-P&C</Link>
          </div>
          <ul className="navbar_menu">
            <Link to="/about">
              <li className="non-login">회사소개</li>
            </Link>
            <Link to="/services">
              <li className="non-login">사업소개</li>
            </Link>
            <Link to="/performance">
              <li className="non-login">주요실적</li>
            </Link>
            <Link to="/boards">
              <li className="non-login">고객지원</li>
            </Link>
          </ul>
          {/* <GiHamburgerMenu className="navbar_togglebtn" /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
