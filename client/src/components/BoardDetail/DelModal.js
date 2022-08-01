/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DelModal({ post, handleDelModal }) {
  const navigate = useNavigate();
  const [user_email_addr, setUser_email_addr] = useState("");
  const [user_pwd, setUser_pwd] = useState("");
  const totalData = {
    user_email_addr,
    user_pwd,
  };
  const userEmaiilHandler = (e) => {
    setUser_email_addr(e.target.value);
  };
  const userPwdHandler = (e) => {
    setUser_pwd(e.target.value);
  };

  const deleteHandler = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/boards/${post.id}`, totalData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("삭제 완료");
          navigate("/boards");
        } else {
          alert("아이디와 비밀번호를 확인해주세요.");
        }
      });
  };

  return (
    <div className="modal-background">
      <div className="modal-del">
        <div className="modal-view-del">
          <div className="modal-header">
            <button type="button" className="btn-close" />
          </div>
          <div className="user-del-container">
            <input
              className="user-id_del-input"
              type="text"
              placeholder="이메일을 입력해주세요"
              maxLength={20}
              onChange={userEmaiilHandler}
              value={user_email_addr}
            />
            <input
              className="user-pwd_del-input"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              maxLength={20}
              onChange={userPwdHandler}
              value={user_pwd}
            />
          </div>
          <div className="btn-del-container">
            <button
              type="button"
              className="del-close-btn"
              onClick={handleDelModal}
            >
              취소
            </button>
            <button
              type="button"
              className="del-save-btn"
              onClick={deleteHandler}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelModal;
