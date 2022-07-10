import { MdOutlineDescription } from "react-icons/md";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function Content({ post, setPosts }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="content-container">
      <div className="content-sub-container">
        <div className="left-container">
          <div className="desc-container">
            <div className="inner-left">
              <MdOutlineDescription className="desc-icon" />
              <span className="content-description">{post.put_deta_cont}</span>
            </div>
            <div className="content-button">
              {isOpen ? (
                <Modal
                  post={post}
                  setPosts={setPosts}
                  handleModal={handleModal}
                />
              ) : null}
              <button
                type="button"
                className="modify-btn"
                onClick={handleModal}
              >
                수정
              </button>
              <button type="button" className="delete-btn">
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
