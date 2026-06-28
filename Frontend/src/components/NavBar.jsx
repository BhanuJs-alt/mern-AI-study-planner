import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🤖 AI Study Planner
      </div>

      <div className="nav-btns">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="start-btn">
          Get Started
        </Link>
      </div>

    </nav>
  );
}