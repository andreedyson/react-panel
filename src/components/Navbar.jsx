import { useNavigate } from "react-router-dom";

export default function Navbar({ onToggleSidebar, onToggleCollapse }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-white border-bottom px-3">
      <div className="d-flex align-items-center gap-2">
        {/* Hamburger Menu */}
        <button
          className="btn btn-sm btn-outline-secondary d-md-none"
          onClick={onToggleSidebar}
        >
          ☰
        </button>
        {/* Toggle Sidebar */}
        <button
          className="btn btn-sm btn-outline-secondary d-none d-md-inline-flex"
          onClick={onToggleCollapse}
        >
          ☰
        </button>
        <span className="text-muted small fw-semibold">Admin</span>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
