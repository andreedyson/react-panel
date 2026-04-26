import { Link } from "react-router-dom";

const users = [
  {
    name: "Andi Pratama",
    email: "andi@email.com",
    status: "Aktif",
    joined: "20 Apr 2025",
  },
  {
    name: "Sari Dewi",
    email: "sari@email.com",
    status: "Aktif",
    joined: "19 Apr 2025",
  },
  {
    name: "Budi Santoso",
    email: "budi@email.com",
    status: "Nonaktif",
    joined: "17 Apr 2025",
  },
  {
    name: "Rina Marlina",
    email: "rina@email.com",
    status: "Aktif",
    joined: "15 Apr 2025",
  },
  {
    name: "Doni Setiawan",
    email: "doni@email.com",
    status: "Pending",
    joined: "13 Apr 2025",
  },
];

const statusVariant = {
  Aktif: "success",
  Nonaktif: "secondary",
  Pending: "warning",
};

export default function Dashboard() {
  return (
    <div>
      <h5 className="fw-bold mb-4">Selamat datang, Admin 👋</h5>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-1">Total Pengguna</p>
              <h4 className="fw-bold mb-0">{users.length}</h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-1">Aktif</p>
              <h4 className="fw-bold mb-0">
                {users.filter((u) => u.status === "Aktif").length}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-1">Nonaktif</p>
              <h4 className="fw-bold mb-0">
                {users.filter((u) => u.status === "Nonaktif").length}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-1">Pending</p>
              <h4 className="fw-bold mb-0">
                {users.filter((u) => u.status === "Pending").length}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Tabel */}
      <div className="card shadow-sm">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Pengguna Terbaru</h6>
          <Link to="/table" className="small text-decoration-none">
            Lihat semua →
          </Link>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Bergabung</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email}>
                    <td>{user.name}</td>
                    <td className="text-muted">{user.email}</td>
                    <td>
                      <span
                        className={`badge bg-${statusVariant[user.status]}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="text-muted">{user.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
