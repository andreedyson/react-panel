import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Andi Pratama",
    email: "andi@email.com",
    role: "Admin",
    status: "Aktif",
  },
  {
    id: 2,
    name: "Sari Dewi",
    email: "sari@email.com",
    role: "Editor",
    status: "Aktif",
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi@email.com",
    role: "Viewer",
    status: "Nonaktif",
  },
  {
    id: 4,
    name: "Rina Marlina",
    email: "rina@email.com",
    role: "Editor",
    status: "Aktif",
  },
  {
    id: 5,
    name: "Doni Setiawan",
    email: "doni@email.com",
    role: "Viewer",
    status: "Pending",
  },
  {
    id: 6,
    name: "Maya Sari",
    email: "maya@email.com",
    role: "Admin",
    status: "Aktif",
  },
  {
    id: 7,
    name: "Reza Fahlevi",
    email: "reza@email.com",
    role: "Viewer",
    status: "Nonaktif",
  },
  {
    id: 8,
    name: "Dewi Anggraini",
    email: "dewi@email.com",
    role: "Editor",
    status: "Aktif",
  },
];

const statusVariant = {
  Aktif: "success",
  Nonaktif: "secondary",
  Pending: "warning",
};

export default function DataTable() {
  const [search, setSearch] = useState("");

  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h5 className="fw-bold mb-4">Data Pengguna</h5>

      <div className="card border-0 shadow-sm" style={{ borderRadius: "12px" }}>
        <div className="card-body p-4">
          {/* Search */}
          <div className="mb-3" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control form-control-sm py-2"
              placeholder="Cari nama, email, atau role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="small fw-semibold">#</th>
                  <th className="small fw-semibold">Nama</th>
                  <th className="small fw-semibold">Email</th>
                  <th className="small fw-semibold">Role</th>
                  <th className="small fw-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <tr key={item.id}>
                      <td className="text-muted small">{item.id}</td>
                      <td className="fw-semibold small">{item.name}</td>
                      <td className="text-muted small">{item.email}</td>
                      <td className="small">{item.role}</td>
                      <td>
                        <span
                          className={`badge bg-${statusVariant[item.status]}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center text-muted py-4 small"
                    >
                      Tidak ada data yang cocok.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer info */}
          <p className="text-muted small mt-3 mb-0">
            Menampilkan {filtered.length} dari {data.length} data
          </p>
        </div>
      </div>
    </div>
  );
}
