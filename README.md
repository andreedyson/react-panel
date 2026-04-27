# React Admin Panel Starter Kit

Template ini disiapkan sebagai titik awal untuk membangun **frontend admin panel** menggunakan React. Struktur sudah dirancang agar langsung bisa digunakan untuk pengembangan fitur tanpa harus setup dari nol.

<img width="1920" height="868" alt="image" src="https://github.com/user-attachments/assets/e7012b50-f225-4477-b77c-bdbccd84bbe1" />

---

## 🎯 Fokus Template

* Struktur proyek yang terorganisir (layout, pages, components)
* Routing dasar siap pakai
* UI dasar menggunakan Bootstrap 5
* Mudah dikembangkan untuk tugas, proyek kampus, atau mini project

---

## 🛠️ Teknologi yang Digunakan

* React + Vite
* React Router DOM
* Bootstrap 5
* ESLint

---

## 🚀 Cara Menggunakan

### 1. Clone Repository

```bash
git clone https://github.com/andreedyson/react-panel.git
cd react-panel-starter-kit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Project

```bash
npm run dev
```

Buka di browser:

```
http://localhost:5173
```

---

## 📦 Perintah Penting

```bash
npm run build     # Build untuk production
npm run preview   # Preview hasil build
npm run lint      # Menjalankan ESLint
```

---

## 📊 Fitur Bawaan

* 🔐 Halaman autentikasi (Login & Register)
* 📌 Dashboard layout (Sidebar + Navbar + Content)
* 📈 Dashboard dengan contoh:

  * Statistik cards
  * Tabel data
* 📋 Halaman tabel terpisah
* 📝 Halaman form sederhana untuk latihan input

---

## ⚠️ Catatan

* Template ini masih **frontend only** (belum terhubung ke backend)
* Status login disimpan sementara di `localStorage`

```
key: isLoggedIn
```

---

## 🔄 Alur Routing

| Path         | Deskripsi          |
| ------------ | ------------------ |
| `/login`     | Halaman login      |
| `/register`  | Halaman register   |
| `/dashboard` | Dashboard utama    |
| `/table`     | Halaman tabel data |
| `/form`      | Halaman form input |

Jika user belum login, akan otomatis diarahkan ke `/login`.

---

## 📁 Struktur Folder

```text
src/
  components/   # Komponen reusable (Navbar, Sidebar)
  layouts/      # Layout halaman (AuthLayout, DashboardLayout)
  pages/        # Halaman utama aplikasi
  styles/       # Styling tambahan (misal sidebar)
  App.jsx       # Konfigurasi routing
  main.jsx      # Entry point React
```

---

## 💡 Saran Pengembangan

Untuk pengembangan lebih lanjut, kamu bisa:

1. Menghubungkan autentikasi ke backend API
2. Mengganti data dummy dengan data dari server
3. Menambahkan fitur CRUD pada tabel & form
4. Implementasi proteksi route dengan JWT/token
5. Menyesuaikan UI dengan branding proyek

---

## 🎯 Tujuan Template

Template ini dibuat agar kamu tidak mulai dari nol dan bisa langsung fokus ke:

* Implementasi fitur
* Integrasi API
* Penulisan kode yang terstruktur dan scalable

---

## ⭐ Support

Jika template ini membantu, berikan ⭐ di repository agar bisa berkembang lebih baik.

---

## 👨‍💻 Author

Created by [@andreedyson](https://github.com/andreedyson)
