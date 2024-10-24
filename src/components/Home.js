import { Link } from "react-router-dom";
import "../components/home.css";
import laptopPic from "./dev-computer.png";

function Home() {
  return (
    <main className="container">
      <h1>Dev Diaries</h1>
      <p className="home-p">
        Welcome all developers! I've got some intresting topics for viewing
        today. Wether your a newbie or a vet in the industry, there is something
        for everyone on Dev Diaries. Take a look around and learn something new
        today!
      </p>
      <div className="laptop">
        <img
          src={laptopPic}
          alt="inner-workings-of-laptop"
          className="laptop"
        />
      </div>

      <section className="featured-topics">
        <h2>Featured Topics</h2>
        <ul>
          <li>
            <Link to="/blog/1">Top 10 JS libraries in 2024</Link>
            <p className="blog-info">
              JavaScript has become an essential language for web development,
              there are numerous libraries available to enhance your projects.
              Here is a list of the top 10 JavaScript libraries that are
              trending in 2024.
            </p>
          </li>
          <li>
            <Link to="/blog/2">Building a Personal Portfolio</Link>
            <p className="blog-info">
              Creating a personal portfolio website is essential for showcasing
              your work and attracting potenial employers or clients. This guide
              will help you get started.
            </p>
          </li>
          <li>
            <Link to="/blog/3">The Importance of Web Accessibility</Link>
            <p className="blog-info">
              Web Accessbility enures everyone, including people with
              disabilities, can access and enjoy your webiste. This guide
              highlights the key reasons why accessiblity matters.
            </p>
          </li>
          <li>
            <Link to="/blog/4">The Future of Web Dev: Trends to Watch</Link>
            <p className="blog-info">
              Web development is constanly evolving, with new trends and
              technolgies shaping the landscape. This guide highlights the key
              trends to watch in the future of web development.
            </p>
          </li>
          <li>
            <Link to="/blog/5">How To: Create an RESTful API</Link>
            <p className="blog-info">
              Creating an API is a powerful way to enable communication between
              software applications, allowing for seamless intergration and
              interaction. APIs allow developers to leverage existing
              functionalities and build creative solutions effeciently.
            </p>
          </li>
          <li>
            <Link to="/blog/6">Getting Started with React Native</Link>
            <p className="blog-info">
              React Native is a popular framework developed by Facebook that
              allows developers to build mobile applications using JavaScript
              and React. It makes it possible to create native apps for bot iOS
              and Andriod platforms from a single codebase. In this post, we
              will explore the fundamentals of React Native, its key features,
              and how to get started.ies and build creative solutions
              effeciently.
            </p>
          </li>
          <li>
            <Link to="/blog/7">Taking a closer look at: NVC Architecture</Link>
            <p className="blog-info">
              MVC (Model-View-Controller) is an architectural pattern widely
              used in software development, particually in web applications. It
              seperates an application into three interconnected components,
              allowing for modularization and seperation of cocerns.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
