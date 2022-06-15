import React from "react";

function Comment() {
  return (
    <>
      <div className="comment-container">
        <div className="comment-title">댓글 3</div>
      </div>
      <div className="comment-sub-container">
        <textarea className="comment-sub" placeholder="text"></textarea>
      </div>
      <div className="save-container">
        <button type="button">등록</button>
      </div>
    </>
  );
}

export default Comment;
