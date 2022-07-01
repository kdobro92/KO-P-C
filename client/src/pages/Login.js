import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // 로그인 상태 변경
  const handleLogin = () => {
    setIsLogin(true);
  };

  // 서버에서 받아온 토큰 최신화
  const issueAccessToken = (token) => {
    setAccessToken(token);
  };

  const handleEmailValue = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePwdValue = (e) => {
    setUserPassword(e.target.value);
  };

  // 로그인 정보 서버에 요청
  const requestLogin = () => {
    const user_email_addr = userEmail;
    const user_pwd = userPassword;
    // const { user_email_addr, user_pwd } = loginInfo;
    // console.log(user_email_addr);
    if (!user_email_addr || !user_pwd) {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
      return;
    }
    axios
      .post(
        "http://localhost:4000/auth/login",
        { user_email_addr, user_pwd },
        { withCredentials: true },
      )
      .then((result) => {
        if (result.data.message === "잘못된 정보를 입력하였습니다.") {
          setErrorMessage(
            "ID가 존재하지 않거나 비밀번호가 일치하지 않습니다 다시 시도해주세요",
          );
        } else {
          handleLogin();
          issueAccessToken(result.data.token);
          alert("로그인 되었습니다.");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-container">
      <div className="modal-view-container">
        <div className="modal-view-header">
          <Link to="/">
            <div className="modal-view_logo">Ko-P&C</div>
          </Link>
          <div className="modal-view_body">
            {/* <div className="login__l-or">OR</div> */}
            <div className="emailLogin_title">이메일 로그인</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="이메일 주소"
                onChange={handleEmailValue}
              />
              <input
                type="password"
                placeholder="비밀번호"
                onChange={handlePwdValue}
              />
              <div className="user-info-empty_alert-box">{errorMessage}</div>
            </form>
            <span className="user_find-pw-btn">
              <Link to="/mypage">
                <span className="user-link">비밀번호를 잊으셨나요?</span>
              </Link>
            </span>
            <div className="btn-container">
              <button
                type="submit"
                className="login_button"
                onClick={requestLogin}
              >
                로그인
              </button>
            </div>
            <div className="login__l-sign-up">
              Ko-P&C가 처음이세요?
              <Link to="/signup">
                <span className="login__signup_link">회원가입하기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
