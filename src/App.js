import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Footer from "./components/footer";
import Post from "./components/Post.js";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wdv-blog" element={<Navigate to="/" replace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
