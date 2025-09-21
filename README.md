# Manajemen Tugas - Universitas Mercubuana

Website manajemen tugas untuk mahasiswa semester 1 jurusan Manajemen dengan integrasi Netlify CMS untuk pengelolaan konten.

## 🚀 Fitur Utama

### ✨ Fitur Website
- **Home**: Menampilkan daftar tugas dengan informasi lengkap
- **Kelompok**: Menampilkan daftar kelompok mata kuliah
- **Admin Panel**: Interface untuk mengelola konten melalui Netlify CMS

### 📝 Fitur Admin (Netlify CMS)
- **Kelola Tugas**: Tambah, edit, hapus tugas individu/kelompok
- **Kelola Kelompok**: Atur informasi kelompok mata kuliah
- **Editorial Workflow**: Review dan approval konten
- **Real-time Preview**: Preview perubahan sebelum publish
- **Version Control**: Git integration untuk tracking perubahan

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **CMS**: Netlify CMS
- **Authentication**: Netlify Identity
- **Deployment**: Netlify
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 📋 Prasyarat

- Node.js 18+
- npm atau yarn
- Git
- Akun Netlify

## 🚀 Instalasi & Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/manajemen-tugas-mercubuana.git
cd manajemen-tugas-mercubuana
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```
Buka `http://localhost:5173/` di browser

### 4. Build Production
```bash
npm run build
```

## 🌐 Deployment ke Netlify

### 1. Connect ke Netlify
1. Login ke [Netlify](https://netlify.com)
2. Klik "New site from Git"
3. Pilih Git provider (GitHub/GitLab)
4. Pilih repository `manajemen-tugas-mercubuana`
5. Build settings akan otomatis terdeteksi dari `netlify.toml`

### 2. Setup Netlify Identity
1. Di dashboard Netlify, buka "Identity" tab
2. Enable Identity service
3. Set Registration preferences:
   - Email: Invite only (untuk admin)
   - External providers: Optional

### 3. Setup Git Gateway
1. Di dashboard Netlify, buka "Identity" tab
2. Klik "Git Gateway"
3. Enable Git Gateway
4. Set Roles & permissions:
   - **Admin**: Full access
   - **Editor**: Can edit content
   - **Viewer**: Read only

## 📝 Penggunaan Netlify CMS

### 1. Akses Admin Panel
- Production: `https://your-site.netlify.app/admin/`
- Development: `http://localhost:5173/admin/`

### 2. Login
1. Klik tombol "Login" di navbar
2. Masukkan email yang diinvite
3. Check email untuk confirmation link
4. Set password dan login

### 3. Kelola Konten

#### Menambah Tugas Baru:
1. Buka `/admin/#/collections/tasks`
2. Klik "New Tugas"
3. Isi form dengan informasi lengkap:
   - Judul tugas
   - Mata kuliah
   - Ruangan
   - Tanggal diberikan & deadline
   - Dosen pengampu
   - Tipe (Individu/Kelompok)
   - Deskripsi
   - Link Google Classroom (opsional)
   - Ketua kelas
   - Nomor WhatsApp

#### Menambah Kelompok Baru:
1. Buka `/admin/#/collections/groups`
2. Klik "New Kelompok"
3. Isi form:
   - Mata kuliah
   - Dosen pengampu
   - Ruangan
   - Link Google Drive
   - Link grup WhatsApp

#### Mengedit Konten:
1. Klik konten yang ingin diedit
2. Modifikasi field yang diperlukan
3. Klik "Save" untuk draft
4. Klik "Publish" untuk publish perubahan

## 📁 Struktur Project

```
manajemen-tugas-mercubuana/
├── public/
│   └── admin/
│       └── config.yml          # Konfigurasi Netlify CMS
├── content/
│   ├── tasks/                  # File tugas individual
│   │   └── *.json
│   ├── groups/                 # File kelompok individual
│   │   └── *.json
│   ├── tasks.json              # Daftar semua tugas
│   └── groups.json             # Daftar semua kelompok
├── src/
│   ├── components/
│   │   ├── ui/                 # Komponen UI reusable
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/
│   │   ├── Home.jsx            # Halaman utama
│   │   ├── Groups.jsx          # Halaman kelompok
│   │   ├── Admin.jsx           # Admin panel interface
│   │   └── TaskDetail.jsx      # Detail tugas
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── netlify.toml                # Konfigurasi Netlify
└── package.json
```

## 🔧 Konfigurasi

### Netlify CMS (config.yml)
- **Backend**: Git Gateway
- **Media**: Upload ke `static/uploads`
- **Collections**:
  - `tasks`: Kelola tugas individu
  - `groups`: Kelola kelompok mata kuliah
  - `pages`: Edit file JSON utama

### Netlify (netlify.toml)
- **Build**: Output ke `dist/`
- **Redirects**: SPA routing + admin panel
- **Headers**: Security untuk admin panel
- **Environment**: Node.js 18

## 🔐 Keamanan

- Netlify Identity untuk authentication
- Git Gateway untuk content management
- Role-based access control
- HTTPS enforced
- Security headers untuk admin panel

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Check dokumentasi Netlify CMS
2. Review konfigurasi di `public/admin/config.yml`
3. Check build logs di Netlify dashboard
4. Pastikan Netlify Identity dan Git Gateway aktif

## 📄 Lisensi

MIT License - bebas digunakan untuk keperluan pendidikan.

---

**Dibuat dengan ❤️ untuk mahasiswa Manajemen Universitas Mercubuana**
