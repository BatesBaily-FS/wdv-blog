import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="container">
      <h1>Web Development in 2024</h1>
      <p>Welcome all developers! Explore our posts of the day today!</p>
      <ul>
        <li>
          <Link to="/blog/1">Top 10 JS libraries in 2024</Link>
          <Link to="/blog/2">Building a Personal Portfolio</Link>
          <Link to="/blog/3">The importance of Web Accessibility</Link>
          <Link to="/blog/4">The Future of Web Dev: Trends to Watch</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
