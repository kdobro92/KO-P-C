import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

function BoardList({ post }) {
  const [list_count, setList_count] = useState(0);

  const onClickBoardList = (e) => {
    e.stopPropagation();
    setList_count(list_count + 1);
  };

  return (
    <Link to={`/boards/${post.id}`}>
      <div className="list-container" onClick={onClickBoardList}>
        <div className="container">{post.id}</div>
        <div className="container">{post.put_titl_cont}</div>
        <div className="container">admin</div>
        <div className="list-date">{post.createdAt.slice(0, 10)}</div>
        <div className="container">{list_count}</div>
      </div>
    </Link>
  );
}

export default BoardList;
