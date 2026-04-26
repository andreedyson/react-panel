import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="d-flex">
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Sidebar Navigasi */}
      <Sidebar
        isOpen={sidebarOpen}
        collapsed={collapsed}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-grow-1 d-flex flex-column main-content">
        <Navbar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />

        {/* Halaman Dashboard Utama */}
        <main className="p-4 flex-grow-1 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
