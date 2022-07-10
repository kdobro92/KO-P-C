import { MdOutlineIosShare } from "react-icons/md";
import { useState } from "react";

function Header({ post }) {
  return (
    <div className="header-container">
      <div className="post-title">{post.put_titl_cont}</div>
      <div className="right-side">
        <p>
          <span className="post-date">작성일 : </span>
          {post.createdAt.slice(0, 10)}
        </p>
        <p>
          <span className="post-view">조회수 : </span>
          {post.view_count}
        </p>
      </div>
    </div>
  );
}
export default Header;
