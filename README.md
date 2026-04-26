# React Panel Starter Kit

Template ini disiapkan sebagai titik awal membuat frontend admin panel dengan React.

Fokus template:

- Struktur proyek (layout, halaman, komponen)
- Routing dasar sudah siap pakai
- UI dasar menggunakan Bootstrap
- Mudah dikembangkan untuk tugas atau mini project

## Teknologi yang Dipakai

- React + Vite
- React Router DOM
- Bootstrap 5
- ESLint

## Cara Menjalankan Proyek

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka di browser: `http://localhost:5173`

Perintah penting lainnya:

```bash
npm run build
npm run preview
npm run lint
```

## Gambaran Fitur Bawaan

- Halaman autentikasi: Login dan Register
- Dashboard layout: Sidebar + Navbar + konten utama
- Halaman dashboard dengan contoh kartu statistik dan tabel data
- Halaman tabel data terpisah
- Halaman form sederhana untuk latihan input data

Catatan:

- Ini masih template frontend, belum terhubung backend asli.
- Status login sementara disimpan di `localStorage` (key: `isLoggedIn`).

## Alur Halaman

- `/login` -> halaman masuk
- `/register` -> halaman daftar
- `/dashboard` -> halaman utama dashboard
- `/table` -> halaman tabel data
- `/form` -> halaman form

Jika belum login, user akan diarahkan ke `/login`.

## Struktur Folder Utama

```text
src/
	components/      # Komponen reusable (Navbar, Sidebar)
	layouts/         # Kerangka halaman (AuthLayout, DashboardLayout)
	pages/           # Halaman utama aplikasi
	styles/          # CSS khusus (misal sidebar)
	App.jsx          # Konfigurasi routing aplikasi
	main.jsx         # Entry point React
```

## Saran Pengembangan untuk Mahasiswa

Kalian bisa lanjutkan template ini dengan:

1. Menghubungkan login/register ke API backend.
2. Mengganti data dummy dashboard dengan data asli dari server.
3. Menambahkan fitur CRUD pada halaman tabel/form.
4. Menambah proteksi route berbasis token/JWT.
5. Menata ulang tampilan agar sesuai branding proyek kalian.

## Tujuan Template Ini

Supaya kalian tidak mulai dari nol. Kalian bisa langsung fokus ke:

- logika fitur,
- integrasi API,
- dan praktik pemrograman web yang rapi.

## Support

Berikan template ini sebuah bintang ⭐ jika kalian merasa terbantu!

---

Created by [@andreedyson](https://www.github.com/andreedyson)
