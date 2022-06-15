import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle, FaRegEdit } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import React from 'react';

function Header() {
  const location = useLocation();
  const inSection = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  // 헤더 숨길 경로
  const hideHeader = ['/login', '/signup'];
  if (hideHeader.includes(location.pathname)) {
    return null;
  }

  if (isLogin) {
    return (
      <header className={scrollPosition ? 'header-active' : ''}>
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
                ></div>
                <div className={isLogin ? 'list active' : 'list'}>
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
    <header className={scrollPosition ? 'header-active' : ''}>
      <div className="inner">
        <div className="navbar">
          <div className="navbar_logo">
            <Link to="/">Ko-P&C</Link>
          </div>
          <ul className="navbar_menu">
            <li className="non-login">
              <Link to="/boards">Board</Link>
            </li>
            <li className="non-login">
              <Link to="/about">About</Link>
            </li>
            <li className="non-login">
              <Link to="/performance">Performance</Link>
            </li>
            <li className="non-login">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="non-login">
              <Link to="/ceo">CEO</Link>
            </li>
          </ul>
          {/* <GiHamburgerMenu className="navbar_togglebtn" /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
