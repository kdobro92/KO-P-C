import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  // 유저 이메일 유효성 검사
  // 올바른 이메일 형식 필수 입력
  // 3개 항목중 하나라도 미입력 후 계정 만들기 버튼 클릭 시 모든 항목 입력 메세지
  const navigate = useNavigate();
  const [user_email_addr, setUserEmail] = useState("");
  const [user_pwd, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 유효한 이메일을 입력했는지 확인
  const isValidEmail = () => {
    const emailFailMessage = document.querySelector(".email-invalid-message");
    // 계정@도메인.최상위도메인
    if (
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        user_email_addr,
      )
    ) {
      emailFailMessage.classList.add("hide");
    } else {
      emailFailMessage.classList.remove("hide");
    }
  };

  // 유효한 비밀번호를 입력했는지 확인
  const isValidPassword = () => {
    const passwordFailMessage = document.querySelector(
      ".password-invalid-message",
    );
    // 최소 8 자, 최소 하나의 알파벳, 하나의 숫자 및 하나의 특수 문자 :
    if (/(?=.*\d)(?=.*[a-zA-ZS]).{8,}/.test(user_pwd)) {
      passwordFailMessage.classList.add("hide");
    } else {
      passwordFailMessage.classList.remove("hide");
    }
  };

  // 4가지 항목을 모두 입력했는지 확인
  // 계정 만들기 버튼을 클릭 시 서버로 회원가입 정보를 요청
  const handleSignup = () => {
    // 4개 항목 중 하나라도 입력이 안된 상태에서 계정 생성 할 시
    if (user_email_addr === "" || user_pwd === "") {
      setErrorMessage("모든 항목은 필수입니다.");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/auth/signup`,
          {
            user_email_addr,
            user_pwd,
          },
          {
            headers: {
              "content-type": "application/json",
            },
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          alert("회원가입이 완료되었습니다.");
          navigate("/");
        });
    }
  };
  return (
    <div className="modal-container">
      <div className="modal-view">
        <div className="modal-view_header">
          <Link to="/">
            <div className="modal-view_logo">Ko-P&C</div>
          </Link>
        </div>
        <div className="modal-view_body">
          <div className="signup_title">회원가입</div>
          <div className="signup_sub">
            회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지
            회원가입이 완료가 되지 않습니다.
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-container">
              <input
                className="email-input"
                type="email"
                placeholder="이메일 주소"
                onChange={(e) => isValidEmail(setUserEmail(e.target.value))}
              />
            </div>
            <div className="email-invalid-message hide">
              유효한 이메일 주소를 입력해 주시기 바랍니다.
            </div>
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => isValidPassword(setUserPassword(e.target.value))}
            />
            <div className="password-invalid-message hide">
              비밀번호는 최소 8자 이상, 알파벳과 숫자 및 특수문자를 포함해야
              합니다.
            </div>
          </form>
          <div className="btn-container">
            <Link to="/">
              <button type="button" className="cancel_button">
                취소
              </button>
            </Link>
            <button
              type="submit"
              className="register_button"
              onClick={handleSignup}
            >
              계정 생성
            </button>
          </div>
          <div className="singup_go-to-login">
            이미 회원이신가요?
            <Link to="/">
              <span className="signup_go-to-login-btn">메인으로</span>
            </Link>
            <div className="alert-box">{errorMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
