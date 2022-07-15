/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DelCommentModal({
  post,
  user_nickname,
  userNickHandler,
  delCommentModal,
}) {
  const { id } = useParams();
  const delCommentHandler = async () => {
    await axios
      .post(`http://localhost:4000/comments/${id}`, user_nickname, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
  };
  console.log(post.comments);
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
              placeholder="닉네임을 입력해주세요"
              onChange={userNickHandler}
              value={user_nickname}
              maxLength={20}
            />
          </div>
          <div className="btn-re-container">
            <button
              type="button"
              className="re-close-btn"
              onClick={delCommentModal}
            >
              취소
            </button>
            <button
              type="button"
              className="re-save-btn"
              onClick={delCommentHandler}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelCommentModal;
