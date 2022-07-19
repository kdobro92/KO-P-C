import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/BoardDetail/Header";
import Image from "../components/BoardDetail/Image";
import Content from "../components/BoardDetail/Content";
import Comment from "../components/BoardDetail/Comment";

function BoardDetail() {
  const { id } = useParams();
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/boards/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data.data);
            setPosts(res.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getPostDetail();
  }, []);

  return (
    <div>
      {posts ? (
        <div className="boardDetail-container">
          <div className="board-inner">
            <Header post={posts} />
            <div className="slider-container">
              <Image image={posts.file_name} />
            </div>
            <Content post={posts} setPosts={setPosts} />
            <Comment post={posts} setPosts={setPosts} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BoardDetail;
