import { MdDashboard, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
   const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return(
  <aside className="sidebar">
      <div className="logo">
        <h2>StudyAI</h2>
      </div>

      <nav className="nav-links">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <MdDashboard size={22} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          onClick={handleLogout}
          to="/Login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <MdLogout size={22} />
          <span>LogOut</span>
        </NavLink>
      </nav>
    </aside>
  );
}