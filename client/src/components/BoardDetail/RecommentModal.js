/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function RecommentModal({ post, recomModalHanlder }) {
  const navigate = useNavigate();
  const [user_email_addr, setUser_email_addr] = useState("");

  const userNickHandler = (e) => {
    setUser_email_addr(e.target.value);
  };

  const deleteHandler = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}boards/${post.id}`,
        user_email_addr,
        {
          withCredentials: true,
        },
      )
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
      <div className="modal-recom">
        <div className="modal-view-recom">
          <div className="modal-header">
            <button type="button" className="btn-close" />
          </div>
          <div className="user-re-container">
            <input
              className="user-nick_re-input"
              type="text"
              placeholder="이메일을 입력해주세요"
              maxLength={20}
              onChange={userNickHandler}
              value={user_email_addr}
            />
          </div>
          <div className="btn-re-container">
            <button
              type="button"
              className="re-close-btn"
              onClick={recomModalHanlder}
            >
              취소
            </button>
            <button
              type="button"
              className="re-save-btn"
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

export default RecommentModal;
