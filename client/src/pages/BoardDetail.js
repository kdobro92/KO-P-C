import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../components/BoardDetail/Comment";

function BoardDetail() {
  const { id } = useParams();
  const [posts, setPosts] = useState("");
  const imagePath = "http://localhost:4000/images/";

  useEffect(() => {
    const getPosts = async () => {
      try {
        await axios
          .get(`http://localhost:4000/boards/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            setPosts(res.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="detail-container">
      <div className="inner-container">
        <h1>게시판</h1>
        <div className="title-container">{posts.put_titl_cont}</div>
        <div className="image-container">
          <img src={imagePath + posts.file_name} alt="img" />
        </div>
        <div className="content-container">{posts.put_deta_cont}</div>
      </div>
      <Comment />
      <div className="list-btn">
        <button type="button">목록</button>
      </div>
    </div>
  );
}

export default BoardDetail;
