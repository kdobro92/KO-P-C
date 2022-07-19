/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from "axios";

function EditCommentModal({
  post,
  data,
  user_nickname,
  put_deta_cont,
  userNickHandler,
  commentValueHandler,
  editCommentModal,
}) {
  const totalData = { user_nickname, put_deta_cont };
  // del버튼을 누를때 해당 코멘트의 id넘버를 찾아서 요청해야함.
  const editCommentHandler = async (commentId) => {
    await axios
      .patch(
        `${process.env.REACT_APP_API_URL}/comments/${commentId}`,
        totalData,
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        location.reload();
      });
    console.log(commentId);
  };

  return (
    <div className="modal-background">
      <div className="modal-edit-recom">
        <div className="modal-view-edit-recom">
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
            <input
              className="edit-comment-input"
              type="text"
              placeholder="댓글을 입력해주세요"
              onChange={commentValueHandler}
              value={put_deta_cont}
              maxLength={300}
            />
          </div>
          <div className="btn-re-edit-container">
            <button
              type="button"
              className="re-close-btn"
              onClick={editCommentModal}
            >
              취소
            </button>
            <button
              type="button"
              className="re-save-btn"
              onClick={() => editCommentHandler(data.id)}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCommentModal;
