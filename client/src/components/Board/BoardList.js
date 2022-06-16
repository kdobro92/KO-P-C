import { Link } from "react-router-dom";
import React, { useState } from "react";

function BoardList({ post }) {
  const [listCount, setListCount] = useState(0);
  console.log(post);
  const onClickBoardList = (e) => {
    e.stopPropagation();
    setListCount(listCount + 1);
  };

  return (
    <Link to={`/boards/${post.id}`}>
      <div
        className="list-container"
        onClick={onClickBoardList}
        aria-hidden="true"
      >
        <div className="container">{post.id}</div>
        <div className="container">{post.put_titl_cont}</div>
        <div className="container">admin</div>
        <div className="list-date">{post.createdAt.slice(0, 10)}</div>
        <div className="container">{listCount}</div>
      </div>
    </Link>
  );
}

export default BoardList;
