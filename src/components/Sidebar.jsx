import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`${isOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to={`/`} style={{textDecoration:"none",color:"black"}}>
          <div className="logo-top">Anvaya</div>
          <div className="logo-btm">CRM</div>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i class="fa-solid fa-users icon-fs"></i>
            Leads
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales">
            <i class="fa-solid fa-universal-access icon-fs"></i>
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/agents">
            <i class="fa-solid fa-headset icon-fs"></i>
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports">
            <i class="fa-solid fa-chart-area icon-fs"></i>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <i class="fa-solid fa-gear icon-fs"></i>
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
