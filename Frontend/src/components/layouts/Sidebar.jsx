import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>StudyAI</h2>

      <nav>
        <Link to="/dashboard">
          Dashboard
        </Link>
         <br />
        <Link to="/settings">
          Settings
        </Link>
      </nav>
    </aside>
  );
}