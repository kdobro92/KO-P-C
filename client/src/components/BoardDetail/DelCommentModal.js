/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from "axios";

function DelCommentModal({
  post,
  data,
  user_nickname,
  userNickHandler,
  delCommentModal,
}) {
  const totalData = { user_nickname };
  // del버튼을 누를때 해당 코멘트의 id넘버를 찾아서 요청해야함.
  const delCommentHandler = async (commentId) => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/comments/${commentId}`,
        totalData,
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        alert("삭제 완료");
        location.reload();
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
              onClick={() => delCommentHandler(data.id)}
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
