import "../components/home.css";
import laptopPic from "./dev-computer.png";
function Home() {
  return (
    <main className="container">
      <h1>Dev Diaries</h1>
      <p>
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
            <a href="/blog/1">Popular JavaScript 2024</a>
          </li>
          <li>
            <a href="/blog/2">Building your Personal Portfolio</a>
          </li>
          <li>
            <a href="/blog/3">The Importance of Web Accessibility</a>
          </li>
          <li>
            <a href="/blog/4">Web Development: Trends to Watch</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
