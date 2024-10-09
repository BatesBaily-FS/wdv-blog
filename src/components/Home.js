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
    </main>
  );
}

export default Home;
