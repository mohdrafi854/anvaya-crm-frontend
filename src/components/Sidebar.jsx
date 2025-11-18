import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="logo">
        <div className="logo-top">
          Anvaya
        </div>
        <div className="logo-btm">
          CRM
        </div>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Leads
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales">Sales</NavLink>
        </li>
        <li>
          <NavLink to="/agents">Agents</NavLink>
        </li>
        <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
