import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", icon: "📊", label: "Dashboard" },
  { to: "/table", icon: "📋", label: "Tabel" },
  { to: "/form", icon: "📝", label: "Form" },
];

export default function Sidebar({ isOpen, collapsed, onClose }) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""} ${collapsed ? "collapsed" : ""}`}
    >
      {/* Sidebar Header untuk brand / logo / nama aplikasi kalian */}
      <div className="sidebar-brand">
        {!collapsed && <span className="brand-name">React Panel</span>}
        <button
          className="btn d-md-none ms-auto"
          style={{ color: "white" }}
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Navigasi / Link utama yang ada di dashbord */}
      <nav className="mt-2">
        <ul className="nav flex-column">
          {navItems.map(({ to, icon, label }) => (
            <li className="nav-item" key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={onClose}
                title={collapsed ? label : ""}
              >
                <span className="nav-icon">{icon}</span>
                {!collapsed && <span className="nav-label">{label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
