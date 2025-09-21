 n# 📋 PANDUAN LENGKAP SETTING NETLIFY & GITHUB

Panduan ini mencakup semua setting yang diperlukan untuk menjalankan website dengan Netlify CMS.

---

## 🚀 **BAGIAN 1: GITHUB REPOSITORY SETUP**

### **1.1 Repository Settings**
1. Buka **https://github.com/Luthfiiiiiiau/mercutugas**
2. Klik **Settings** (tab paling kanan)
3. Scroll ke **"Danger Zone"**
4. Pastikan repository **TIDAK** di-private (harus public)

### **1.2 Branch Settings**
- **Default branch**: `main` ✅
- **Protected branches**: Tidak perlu setting khusus

---

## 🌐 **BAGIAN 2: NETLIFY SITE SETUP**

### **2.1 Basic Site Information**
1. Buka **https://app.netlify.com/sites/mercutugas/settings/general**
2. **Site name**: `mercutugas` ✅
3. **Site URL**: `https://mercutugas.netlify.app` ✅

### **2.2 Repository Connection**
1. Buka **https://app.netlify.com/sites/mercutugas/settings/deploys**
2. **Branch to deploy**: `main` ✅
3. **Repository**: `Luthfiiiiiiau/mercutugas` ✅

---

## ⚙️ **BAGIAN 3: BUILD & DEPLOY SETTINGS**

### **3.1 Build Settings**
1. Buka **https://app.netlify.com/sites/mercutugas/settings/deploys**
2. **Base directory**: (kosongkan)
3. **Package directory**: (kosongkan)
4. **Build command**: `npm run build` ⚠️ **PENTING**
5. **Publish directory**: `dist` ✅

### **3.2 Environment Variables**
1. Buka **https://app.netlify.com/sites/mercutugas/settings/deploys**
2. Scroll ke **"Environment variables"**
3. Klik **"Edit variables"**
4. Tambahkan variable baru:
   - **Key**: `NODE_VERSION`
   - **Value**: `18`
   - **Scopes**: (centang semua)

---

## 🔐 **BAGIAN 4: IDENTITY & GIT GATEWAY**

### **4.1 Enable Identity**
1. Buka **https://app.netlify.com/sites/mercutugas/settings/identity**
2. Klik **"Enable Identity"**
3. **Registration preferences**: Pilih **"Invite only"**
4. **External providers**: Pastikan **GitHub** aktif
5. Klik **"Save"**

### **4.2 Enable Git Gateway**
1. Di halaman Identity yang sama
2. Scroll ke **"Services"**
3. Klik **"Enable Git Gateway"**
4. **Repository**: `Luthfiiiiiiau/mercutugas`
5. **Branch**: `main`
6. **Deploy settings**: (default)
7. Klik **"Save"**

### **4.3 Invite Admin User**
1. Di halaman Identity
2. Klik **"Invite users"**
3. Masukkan email GitHub Anda
4. Klik **"Send invite"**

---

## 🌍 **BAGIAN 5: DOMAIN & CUSTOM URL**

### **5.1 Domain Settings**
1. Buka **https://app.netlify.com/sites/mercutugas/settings/domain**
2. **Primary domain**: `mercutugas.netlify.app` ✅
3. Tidak perlu custom domain untuk sekarang

---

## 📁 **BAGIAN 6: FILE STRUCTURE VERIFICATION**

### **6.1 Required Files**
Pastikan file-file ini ada di repository:

**Root Files:**
- `package.json` ✅
- `vite.config.js` ✅
- `netlify.toml` ✅
- `index.html` ✅

**Public Files:**
- `public/config-netlify.yml` ✅
- `public/admin/index.html` ✅

**Source Files:**
- `src/App.jsx` ✅
- `src/main.jsx` ✅
- `src/index.css` ✅

---

## 🔧 **BAGIAN 7: TESTING & VERIFICATION**

### **7.1 Deploy Status**
1. Buka **https://app.netlify.com/sites/mercutugas/deploys**
2. Pastikan **Latest deploy** sukses
3. Status: **Published** ✅

### **7.2 Admin Panel Test**
1. Akses: `https://mercutugas.netlify.app/admin/#/`
2. Klik **"Login"**
3. Pilih **GitHub**
4. Pastikan tidak ada error di console

### **7.3 Website Test**
1. Akses: `https://mercutugas.netlify.app`
2. Pastikan halaman utama muncul
3. Test navigasi ke halaman lain

---

## 🚨 **BAGIAN 8: TROUBLESHOOTING**

### **8.1 Error "Branch not found"**
**Penyebab**: Git Gateway belum aktif
**Solusi**:
1. Pastikan Identity sudah di-enable
2. Pastikan Git Gateway sudah di-enable
3. Pastikan branch `main` sudah benar
4. Trigger redeploy manual

### **8.2 Error "Build failed"**
**Penyebab**: Build command salah
**Solusi**:
1. Ubah Build command ke `npm run build`
2. Pastikan NODE_VERSION = 18
3. Trigger redeploy

### **8.3 Error "Config not found"**
**Penyebab**: Redirect config.yml salah
**Solusi**:
1. Pastikan file `public/config-netlify.yml` ada
2. Pastikan redirect di `netlify.toml` benar
3. Trigger redeploy

### **8.4 Error "CSP blocked"**
**Penyebab**: Content Security Policy
**Solusi**:
1. Sudah diperbaiki di `netlify.toml`
2. Trigger redeploy

---

## 📋 **BAGIAN 9: CHECKLIST FINAL**

### **GitHub ✅**
- [ ] Repository public
- [ ] Branch main default
- [ ] Latest commit pushed

### **Netlify ✅**
- [ ] Site connected to repository
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] NODE_VERSION: `18`
- [ ] Identity enabled
- [ ] Git Gateway enabled
- [ ] GitHub provider aktif
- [ ] User invited

### **Files ✅**
- [ ] `public/config-netlify.yml` ada
- [ ] `netlify.toml` ada
- [ ] `package.json` ada
- [ ] All source files ada

### **Testing ✅**
- [ ] Website accessible
- [ ] Admin panel accessible
- [ ] Login works
- [ ] No console errors

---

## 🎯 **BAGIAN 10: STEP BY STEP EXECUTION**

### **Step 1: GitHub Verification**
1. Push latest changes to GitHub
2. Pastikan repository public

### **Step 2: Netlify Build Settings**
1. Set Build command = `npm run build`
2. Set Publish directory = `dist`
3. Add NODE_VERSION = 18

### **Step 3: Enable Identity**
1. Enable Identity service
2. Enable Git Gateway
3. Invite yourself as admin

### **Step 4: Trigger Deploy**
1. Go to Deploys tab
2. Click "Trigger deploy" > "Deploy site"

### **Step 5: Test**
1. Test website: `https://mercutugas.netlify.app`
2. Test admin: `https://mercutugas.netlify.app/admin/#/`

---

**⚠️ PENTING:**
- Lakukan setting satu per satu
- Trigger deploy manual setelah setiap perubahan penting
- Tunggu 2-3 menit setelah setiap deploy
- Test setiap komponen secara terpisah

**Jika masih ada error, berikan screenshot error dan langkah yang sudah dilakukan!**

---

**Dibuat untuk: Project Manajemen Tugas Mercu Buana**
**Tanggal**: $(date)
**Status**: Complete Setup Guide
