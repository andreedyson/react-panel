import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DataTable from "./pages/DataTable";
import FormPage from "./pages/FormPage";

// Cuma yang login yang bisa akses
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) return <Navigate to={"/login"} replace />;

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Login dan Register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Halaman Dashboard */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table" element={<DataTable />} />
          <Route path="/form" element={<FormPage />} />
        </Route>

        <Route path="*" element={<Navigate to={"/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
