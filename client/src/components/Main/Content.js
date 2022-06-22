import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

function Content() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        await axios
          .get("http://localhost:4000/boards", {
            withCredentials: true,
          })
          .then((res) => {
            setPosts(res.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div className="slider-wrap">
      <div className="slider-container">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              image={post.file_name}
              title={post.put_titl_cont}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Content;
