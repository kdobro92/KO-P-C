import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Performance from "./pages/Performance";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import UnifiedMail from "./pages/UnifiedMail";
import "./scss/style.scss";
import Signup from "./pages/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}auth/logout`,
          null,
          {
            headers: { authorization: `Bearer ${accessToken}` },
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // setUserInfo(null);
          setIsLogin(false);
          alert("로그아웃 되었습니다.");
          navigate("/");
        });
    }
  };
  return (
    <>
      <Header
        isLogin={isLogin}
        accessToken={accessToken}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/unifiedmail" element={<UnifiedMail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
