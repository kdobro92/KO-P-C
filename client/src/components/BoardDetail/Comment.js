/* eslint-disable react/no-array-index-key */
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import CommentModal from "./CommentModal";
import DelCommentModal from "./DelCommentModal";
import EditCommentModal from "./EditCommentModal";

function Comment({ post }) {
  const text = "댓글을 입력해주세요";
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const [posts, setPosts] = useState(0);
  const [user_nickname, setUser_nickname] = useState("");
  const [put_deta_cont, setPut_deta_cont] = useState("");
  const userNickHandler = (e) => {
    setUser_nickname(e.target.value);
  };
  const commentValueHandler = (e) => {
    setPut_deta_cont(e.target.value);
  };
  const recomShowHandler = (index) => {
    setPosts(index);
    setIsShow(!isShow);
  };

  const editCommentModal = () => {
    setIsEdit(!isEdit);
  };
  const delCommentModal = () => {
    setIsDel(!isDel);
  };

  const recomModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="comment-container">
        <div className="comment-title">댓글 {post.comments.length}</div>
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
        {isOpen ? (
          <CommentModal
            post={post}
            put_deta_cont={put_deta_cont}
            user_nickname={user_nickname}
            userNickHandler={userNickHandler}
            setPut_deta_cont={setPut_deta_cont}
            recomModalHanlder={recomModalHandler}
          />
        ) : null}
        <button className="add-btn" type="button" onClick={recomModalHandler}>
          등록
        </button>
      </div>
      {post.comments.map((data, idx) => {
        return (
          <>
            <div className="recom-total">
              <div className="left-recom">
                <div className="user-nickname">{data.user_nickname}</div>
                <div className="re-writer">작성자</div>
              </div>
              <div className="right-recom">
                {isEdit ? (
                  <EditCommentModal
                    data={data}
                    user_nickname={user_nickname}
                    userNickHandler={userNickHandler}
                    put_deta_cont={put_deta_cont}
                    commentValueHandler={commentValueHandler}
                    editCommentModal={editCommentModal}
                  />
                ) : null}
                <span
                  className="edit-recom-btn"
                  onClick={editCommentModal}
                  aria-hidden="true"
                >
                  수정
                </span>
                {isDel ? (
                  <DelCommentModal
                    key={data.id}
                    post={post}
                    data={data}
                    user_nickname={user_nickname}
                    userNickHandler={userNickHandler}
                    delCommentModal={delCommentModal}
                  />
                ) : null}
                <span
                  className="del-recom-btn"
                  onClick={delCommentModal}
                  aria-hidden="true"
                >
                  삭제
                </span>
              </div>
            </div>

            <li className="total-comment">{data.put_deta_cont}</li>
            <button
              type="button"
              className="re-comment"
              onClick={() => recomShowHandler(idx)}
            >
              {isShow ? (
                <span>
                  <AiOutlineMinusSquare className="hide-icon" />
                  숨기기
                </span>
              ) : (
                <span>
                  <BsPlusSquare className="show-icon" />
                  답글 달기
                </span>
              )}
            </button>
            {isShow ? (
              <>
                <div className="comment-sub-container">
                  <textarea
                    className="comment-sub"
                    placeholder={text}
                    onChange={commentValueHandler}
                    value={put_deta_cont}
                  />
                </div>
                <div className="save-re-container">
                  {isOpen ? <CommentModal /> : null}
                  <button
                    className="re-add-btn"
                    type="button"
                    onClick={recomModalHandler}
                  >
                    등록
                  </button>
                </div>
              </>
            ) : null}
          </>
        );
      })}
    </>
  );
}

export default Comment;
