import { useState } from "react";

export default function FormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    gender: "",
    bio: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role || !form.gender) {
      setError("Semua kolom wajib diisi.");
      return;
    }
    if (!form.agree) {
      setError("Kamu harus menyetujui syarat dan ketentuan.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      role: "",
      gender: "",
      bio: "",
      agree: false,
    });
    setSubmitted(false);
    setError("");
  };

  if (submitted) {
    return (
      <div>
        <h5 className="fw-bold mb-4">Form Input</h5>
        <div
          className="card border-0 shadow-sm text-center py-5"
          style={{ borderRadius: "12px" }}
        >
          <div className="card-body">
            <div style={{ fontSize: "2.5rem" }}>✅</div>
            <h6 className="fw-bold mt-3 mb-1">Data berhasil disimpan!</h6>
            <p className="text-muted small mb-4">
              Data atas nama <strong>{form.name}</strong> telah berhasil
              disubmit.
            </p>
            <button
              className="btn btn-sm py-2 px-4 text-white fw-semibold"
              style={{ background: "#1e2a3a", borderRadius: "8px" }}
              onClick={handleReset}
            >
              Input data baru
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h5 className="fw-bold mb-4">Form Input</h5>

      <div className="card border-0 shadow-sm" style={{ borderRadius: "12px" }}>
        <div className="card-body p-4">
          {error && (
            <div
              className="alert alert-danger py-2 small border-0"
              role="alert"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
              {/* Nama */}
              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm py-2"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-12 col-md-6">
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

              {/* Role */}
              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold">Role</label>
                <select
                  name="role"
                  className="form-select form-select-sm py-2"
                  value={form.role}
                  onChange={handleChange}
                >
                  <option value="">Pilih role</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>

              {/* Gender */}
              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold">
                  Jenis kelamin
                </label>
                <div className="d-flex gap-3 mt-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="laki"
                      value="Laki-laki"
                      checked={form.gender === "Laki-laki"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label small" htmlFor="laki">
                      Laki-laki
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="perempuan"
                      value="Perempuan"
                      checked={form.gender === "Perempuan"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="perempuan"
                    >
                      Perempuan
                    </label>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="col-12">
                <label className="form-label small fw-semibold">
                  Bio <span className="text-muted fw-normal">(opsional)</span>
                </label>
                <textarea
                  name="bio"
                  className="form-control form-control-sm py-2"
                  rows={3}
                  placeholder="Tulis bio singkat..."
                  value={form.bio}
                  onChange={handleChange}
                />
              </div>

              {/* Checkbox */}
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={form.agree}
                    onChange={handleChange}
                  />
                  <label className="form-check-label small" htmlFor="agree">
                    Saya menyetujui syarat dan ketentuan yang berlaku
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex gap-2 mt-4">
              <button
                type="submit"
                className="btn py-2 px-4 text-white fw-semibold"
                style={{ background: "#1e2a3a", borderRadius: "8px" }}
              >
                Simpan
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary py-2 px-4 fw-semibold"
                style={{ borderRadius: "8px" }}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
