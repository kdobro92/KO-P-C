import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function Comment() {
  const text = "댓글을 입력해주세요";
  const { id } = useParams();
  const [put_deta_cont, setPut_deta_cont] = useState("");
  const commentValueHandler = (e) => {
    setPut_deta_cont(e.target.value);
  };

  const addCommentHanlder = async () => {
    if (!put_deta_cont) {
      alert("댓글을 등록해주세요.");
    }
    try {
      await axios
        .post(
          `http://localhost:4000/comments`,
          {
            put_deta_cont,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          alert("등록 완료");
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="comment-container">
        <div className="comment-title">댓글 3</div>
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
    </>
  );
}

export default Comment;
