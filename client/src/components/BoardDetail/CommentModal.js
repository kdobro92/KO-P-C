/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CommentModal({
  post,
  user_nickname,
  userNickHandler,
  put_deta_cont,
  setPut_deta_cont,
  recomModalHanlder,
}) {
  const board_id = post.id;

  const addCommentHandler = async () => {
    if (!put_deta_cont) {
      alert("댓글을 등록해주세요.");
    } else {
      try {
        await axios
          .post(
            `${process.env.REACT_APP_API_URL}comments`,
            { put_deta_cont, board_id, user_nickname },
            {
              withCredentials: true,
            },
          )
          .then((res) => {
            alert("등록 완료");
            setPut_deta_cont("");
            location.reload();
          });
      } catch (err) {
        console.log(err);
      }
    }
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
              onClick={recomModalHanlder}
            >
              취소
            </button>
            <button
              type="button"
              className="re-save-btn"
              onClick={addCommentHandler}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
