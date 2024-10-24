import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import postOnePic from "./js-library.jpeg";
import postTwoPic from "./personal-portfolio1.png";
import postThreePic from "./web-accessibility3.jpeg";
import postFourPic from "./future-of-dev2.jpeg";
import postFivePic from "./rest-api.avif";
import postSixPic from "./react-native2.jpeg";
import postSevenPic from "./mvc.webp";

const openLightBox = (src, caption) => {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.style.position = "fixed";
  lightbox.style.top = "0";
  lightbox.style.left = "0";
  lightbox.style.width = "0";
  lightbox.style.height = "0";
  lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightbox.style.display = "flex";
  lightbox.style.flexDirection = "column";
  lightbox.style.justifyContent = "center";
  lightbox.style.alignItems = "center";
  lightbox.style.zIndex = "1000";

  const img = document.createElement("img");
  img.src = src;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  lightbox.appendChild(img);

  const captionText = document.createElement("p");
  captionText.innerText = caption;
  captionText.style.color = "white";
  captionText.style.marginTop = "10px";
  lightbox.appendChild(captionText);

  lightbox.onclick = () => {
    lightbox.remove();
  };

  document.body.appendChild(lightbox);
};

function Blog() {
  return (
    <div className="container">
      <h1>Web Development in 2024</h1>
      <p>Welcome all developers! Explore our posts of the day today!</p>

      <main className="posts">
        <h2>Latest...</h2>

        <div className="groupOne">
          <div className="post">
            <Link to="/blog/1">Top 10 JS libraries in 2024</Link>
            <img
              src={postOnePic}
              alt="JavaScript ibraries"
              onClick={() =>
                openLightBox(postOnePic, "Top 10 JS libraries in 2024")
              }
            />
          </div>

          <div className="post">
            <Link to="/blog/2">Building a Personal Portfolio</Link>
            <img
              src={postTwoPic}
              alt="Personal Portfolio"
              onClick={() =>
                openLightBox(postTwoPic, "Building a Personal Portfolio")
              }
            />
          </div>
        </div>

        <div className="groupTwo">
          <div className="post">
            <Link to="/blog/3">The Importance of Web Accessibility</Link>
            <img
              src={postThreePic}
              alt="Web Accessibility"
              onClick={() =>
                openLightBox(
                  postThreePic,
                  "The Importance of Web Accessibility"
                )
              }
            />
          </div>

          <div className="post">
            <Link to="/blog/4">The Future of Web Dev: Trends to Watch</Link>
            <img
              src={postFourPic}
              alt="Future of web developement"
              className="web-dev"
              onClick={() =>
                openLightBox(
                  postFourPic,
                  "The Future of Web Dev: Trends to Watch"
                )
              }
            />
          </div>
          <div className="post">
            <Link to="/blog/5">How To: Create an RESTful API</Link>
            <img
              src={postFivePic}
              alt="JavaScript ibraries"
              className="rest-api"
              onClick={() =>
                openLightBox(postOnePic, "Top 10 JS libraries in 2024")
              }
            />
          </div>
          <div className="post">
            <Link to="/blog/6">Getting Started with React Native</Link>
            <img
              src={postSixPic}
              alt="React Native"
              className="react-native"
              onClick={() =>
                openLightBox(postSixPic, "Getting Started with React Native")
              }
            />
          </div>
          <div className="post">
            <Link to="/blog/7">Taking a closer look at: MVC Architecture</Link>
            <img
              src={postSevenPic}
              alt="React Native"
              className="mvc"
              onClick={() =>
                openLightBox(postSevenPic, "Getting Started with React Native")
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
