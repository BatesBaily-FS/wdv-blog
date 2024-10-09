import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Footer from "./components/footer";
import Post from "./components/post";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
