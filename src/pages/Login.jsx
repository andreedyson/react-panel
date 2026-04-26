import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Email dan password wajib diisi.");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div
      className="card border-0 shadow"
      style={{ width: "100%", maxWidth: "400px", borderRadius: "12px" }}
    >
      <div className="card-body p-4 p-md-5">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h5 className="fw-bold mb-1">Selamat datang 👋</h5>
          <p className="text-muted small mb-4">Masuk ke ReactPanel</p>
        </div>

        {error && (
          <div className="alert alert-danger py-2 small border-0" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label small fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-sm py-2"
              placeholder="admin@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-sm py-2"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 text-white fw-semibold"
            style={{ background: "#1e2a3a", borderRadius: "8px" }}
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-muted small mt-4 mb-0">
          Belum punya akun?{" "}
          <Link to="/register" className="text-decoration-none fw-semibold">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
