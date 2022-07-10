/* eslint-disable no-restricted-globals */
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Comment({ post }) {
  const text = "댓글을 입력해주세요";
  const board_id = post.id;
  const [put_deta_cont, setPut_deta_cont] = useState("");
  const commentValueHandler = (e) => {
    setPut_deta_cont(e.target.value);
  };
  const addCommentHanlder = async () => {
    if (!put_deta_cont) {
      alert("댓글을 등록해주세요.");
    } else {
      try {
        await axios
          .post(
            `http://localhost:4000/comments`,
            { put_deta_cont, board_id },
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
    <>
      <div className="comment-container">
        {/* <div className="comment-title">댓글 {post.comments.length}</div> */}
      </div>
      <div className="comment-sub-container">
        <textarea
          className="comment-sub"
          placeholder={text}
          onChange={commentValueHandler}
          value={put_deta_cont}
        />
      </div>
      <div className="save-container">
        <Link to="/boards">
          <button className="list-btn" type="button">
            목록
          </button>
        </Link>
        <button className="add-btn" type="button" onClick={addCommentHanlder}>
          등록
        </button>
      </div>
      {/* {post.comments.map((data) => {
        return <li className="total-comment">{data.put_deta_cont}</li>;
      })} */}
    </>
  );
}

export default Comment;
