import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "../components/Board/BoardList";
import Modal from "../components/Board/Modal";
import Pagination from "../components/Board/Pagination";

function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/boards`, {
        withCredentials: true,
      })
      .then((res) => {
        setPosts(res.data.data);
      });
  };

  return (
    <div className="whole-container">
      <div className="board-thumbnail">
        <img className="board-img" src="img/contact.png" alt="board" />
      </div>
      <h2 className="board-sub">건설사업관리</h2>
      <div className="board-container">
        <div className="boardList-container">
          <ul className="list-title">
            <li>번호</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성일</li>
            <li>조회수</li>
          </ul>
          <div>
            {currentPosts.length > 0
              ? currentPosts.map((post) => {
                  return (
                    <BoardList key={post.id} post={post} setPosts={setPosts} />
                  );
                })
              : null}
          </div>
        </div>
      </div>
      {isOpen ? <Modal setPosts={setPosts} handleModal={handleModal} /> : null}
      <div className="btn-container">
        <button type="button" className="write-btn" onClick={handleModal}>
          글쓰기
        </button>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Board;
