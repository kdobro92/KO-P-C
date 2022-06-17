import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function Header() {
  const location = useLocation();

  // 헤더 숨길 경로
  const hideHeader = ["/login", "/signup"];
  if (hideHeader.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="navbar-logo">
          <HiOutlineOfficeBuilding className="icon-logo" />
          <Link to="/">Ko-P&C</Link>
        </div>
        <ul className="navbar-menu">
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
      </div>
    </nav>
  );
}

export default Header;
