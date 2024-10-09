import "./header.css";
import { Link } from "react-router-dom";
import diaryIcon from "./diary-icon.jpeg";
function Header() {
  return (
    <header>
      <img src={diaryIcon} alt="blue-diary-icon" className="diary-icon" />
      <h3>Dev Diaries</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}
export default Header;
