import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// import markdown files
import postOne from "./posts/postOne";
import postTwo from "./posts/postTwo";
import postThree from "./posts/postThree";
import postFour from "./posts/postFour";

const posts = {
  1: { title: "Post One", content: postOne },
  2: { title: "Post Two", content: postTwo },
  3: { title: "Post Three", content: postThree },
  4: { title: "Post Four", content: postFour },
};

function Post() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const post = post[id];

  useEffect(() => {
    if (post) {
      setContent(post.content);
    } else {
      setContent("Post not found");
    }
  }, [post]);

  return (
    <div className="container">
      <h1>{post ? post.title : "Post not found"}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Post;
