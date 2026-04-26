import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Semua kolom wajib diisi.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div
      className="card border-0 shadow"
      style={{ width: "100%", maxWidth: "500px", borderRadius: "12px" }}
    >
      <div className="card-body p-4 p-md-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h5 className="fw-bold mb-1">Buat akun baru</h5>
          <p className="text-muted small mb-4">Daftar ke ReactPanel</p>
        </div>

        {error && (
          <div className="alert alert-danger py-2 small border-0" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label small fw-semibold">Nama lengkap</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-sm py-2"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-sm py-2"
              placeholder="john@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
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

          <div className="mb-4">
            <label className="form-label small fw-semibold">
              Konfirmasi password
            </label>
            <input
              type="password"
              name="confirm"
              className="form-control form-control-sm py-2"
              placeholder="••••••••"
              value={form.confirm}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 text-white fw-semibold"
            style={{ background: "#1e2a3a", borderRadius: "8px" }}
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-muted small mt-4 mb-0">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-decoration-none fw-semibold">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
