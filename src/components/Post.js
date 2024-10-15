import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../components/post.css";

// import images
import jsLibrariesImage from "./js-library.jpeg";
import portfolioImage from "./personal-portfolio2.png";
import webAccessImage from "./web-accessibility1.png";
import futureDevImage from "./future-of-dev1.jpeg";
import restApi from "./rest-api.avif";

// import markdown files
import postOne from "../posts/postOne.md";
import postTwo from "../posts/postTwo.md";
import postThree from "../posts/postThree.md";
import postFour from "../posts/postFour.md";
import postFive from "../posts/postFive.md";

const posts = {
  1: { content: postOne },
  2: { content: postTwo },
  3: { content: postThree },
  4: { content: postFour },
  5: { content: postFive },
};

const imageMap = {
  "../components/js-library.jpeg": jsLibrariesImage,
  "../components/personal-portfolio2.png": portfolioImage,
  "../components/web-accessibility1.png": webAccessImage,
  "../components/future-of-dev1.jpeg": futureDevImage,
  "../components/rest-api.avif": restApi,
};

function Post() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const post = posts[id];

  useEffect(() => {
    if (post) {
      fetch(post.content)
        .then((response) => response.text())
        .then((text) => setContent(text));
    } else {
      setContent("Post not found");
    }
  }, [post]);

  return (
    <div className="container">
      <h1>{post ? post.title : "Post not found"}</h1>
      <div className="react-markdown">
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => {
              const { src } = props;
              const imageSrc = imageMap[src] || src;

              return (
                <img
                  {...props}
                  src={imageSrc}
                  alt={props.alt}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    width: "400px",
                    borderRadius: "8px",
                    border: "2px solid black",
                  }}
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Post;
