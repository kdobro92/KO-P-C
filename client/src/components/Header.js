import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function Header({ isLogin, handleLogout }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  // 헤더 숨길 경로
  const hideHeader = ["/login", "/signup"];
  if (hideHeader.includes(location.pathname)) {
    return null;
  }

  if (!isLogin) {
    return (
      <nav className="navbar">
        <div className="nav-inner">
          <div className="navbar-logo">
            <HiOutlineOfficeBuilding className="icon-logo" />
            <Link to="/">Ko-P&C</Link>
          </div>
          <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
            <Link to="/about">
              <li className="non-login">회사소개</li>
            </Link>
            <Link to="/boards">
              <li className="non-login">고객지원</li>
            </Link>
            <Link to="/unifiedmail">
              <li className="non-login">이메일</li>
            </Link>
            <Link to="/login">
              <li className="non-login">로그인</li>
            </Link>
          </ul>
          <div
            className="navbar-toggleBtn"
            onClick={toggleHandler}
            aria-hidden="true"
          >
            <GiHamburgerMenu className="toggle-icon" />
          </div>
        </div>
      </nav>
    );
  }
  if (isLogin) {
    return (
      <nav className="navbar">
        <div className="nav-inner">
          <div className="navbar-logo">
            <HiOutlineOfficeBuilding className="icon-logo" />
            <Link to="/">Ko-P&C</Link>
          </div>
          <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
            <Link to="/about">
              <li className="non-login">회사소개</li>
            </Link>
            <Link to="/boards">
              <li className="non-login">고객지원</li>
            </Link>
            <Link to="/unifiedmail">
              <li className="non-login">이메일</li>
            </Link>
            <Link to="/mypage">
              <li className="non-login">마이페이지</li>
            </Link>
            <Link to="/logout">
              <li
                className="non-login"
                onClick={handleLogout}
                aria-hidden="true"
              >
                로그아웃
              </li>
            </Link>
          </ul>
          <div
            className="navbar-toggleBtn"
            onClick={toggleHandler}
            aria-hidden="true"
          >
            <GiHamburgerMenu className="toggle-icon" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
