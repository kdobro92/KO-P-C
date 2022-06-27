import { Link } from "react-router-dom";

function BoardList({ post, setPosts }) {
  const onClickBoardList = () => {
    // setPosts(post.view_count + 1);
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
        <div className="container">{post.view_count}</div>
      </div>
    </Link>
  );
}

export default BoardList;
