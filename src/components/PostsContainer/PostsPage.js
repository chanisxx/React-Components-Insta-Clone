//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import LikeSection from "./LikeSection"
import dummyData from "../../dummy-data"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState( dummyData );

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */ }
      {posts.map((object) => {
        return <Post post = {object}/>
      })}
    </div>
  );
};

export default PostsPage;
