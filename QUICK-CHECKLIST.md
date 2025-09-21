# ⚡ QUICK CHECKLIST - PERBAIKAN CEPAT

## 🚨 **ERROR "BRANCH NOT FOUND" - SOLUSI CEPAT**

### **1. CEK BUILD COMMAND**
❌ **Salah**: `npm run cms:build`
✅ **Benar**: `npm run build`

**Cara perbaiki:**
1. Buka https://app.netlify.com/sites/mercutugas/settings/deploys
2. Ubah Build command dari `npm run cms:build` ke `npm run build`
3. Klik Save
4. Trigger deploy manual

### **2. CEK GIT GATEWAY**
**Status harus**: ✅ Enabled

**Cara cek:**
1. Buka https://app.netlify.com/sites/mercutugas/settings/identity
2. Pastikan "Git Gateway" = Enabled
3. Repository = Luthfiiiiiiau/mercutugas
4. Branch = master

### **3. CEK IDENTITY SERVICE**
**Status harus**: ✅ Enabled

**Cara cek:**
1. Di halaman Identity yang sama
2. Pastikan "Identity" = Enabled
3. External providers: GitHub = Active

### **4. CEK USER INVITATION**
**Status harus**: ✅ Invited

**Cara cek:**
1. Di halaman Identity
2. Klik "Invite users"
3. Pastikan email Anda sudah di-invite

---

## 🔍 **TESTING SEQUENCE**

### **Test 1: Build Process**
1. Trigger manual deploy
2. Tunggu hingga selesai
3. Status: ✅ Published

### **Test 2: Website Access**
1. Akses: https://mercutugas.netlify.app
2. Status: ✅ Halaman muncul

### **Test 3: Admin Access**
1. Akses: https://mercutugas.netlify.app/admin/#/
2. Klik Login
3. Pilih GitHub
4. Status: ✅ No errors

---

## 📞 **JIKA MASIH ERROR**

**Error**: "Branch not found"
**Solusi**:
1. ✅ Build command sudah `npm run build`?
2. ✅ Git Gateway enabled?
3. ✅ Identity enabled?
4. ✅ User invited?
5. ✅ Manual deploy triggered?

**Error**: "Build failed"
**Solusi**:
1. ✅ NODE_VERSION = 18?
2. ✅ Build command benar?
3. ✅ Repository connected?

---

**Baca PANDUAN-SETTING-NETLIFY-GITHUB.md untuk detail lengkap!**
