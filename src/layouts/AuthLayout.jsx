import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) return <Navigate to={"/dashboard"} replace />;

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Outlet />
    </div>
  );
}
