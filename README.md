# Manajemen Tugas Mercu Buana

Website untuk membantu mahasiswa jurusan Manajemen semester 1 dalam melihat daftar tugas individu maupun kelompok.

## 🚀 Features

- **Home**: Menampilkan daftar tugas dengan informasi lengkap
- **Kelompok**: Menampilkan daftar kelompok/grup untuk setiap mata kuliah
- **Admin Panel**: Netlify CMS untuk mengelola konten

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 📝 Content Management

### Admin Panel Setup

1. **Enable Netlify Identity**:
   - Go to your Netlify site dashboard
   - Navigate to **Settings** > **Identity**
   - Enable Identity service
   - Set Registration preferences to "Open" or "Invite only"

2. **Enable Git Gateway**:
   - Go to **Settings** > **Build & deploy**
   - Scroll to **Build settings**
   - Click **Edit settings**
   - Add this environment variable:
     - Key: `GITHUB_TOKEN`
     - Value: Your GitHub personal access token
   - Save settings

3. **Create GitHub Token**:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate new token with `repo` scope
   - Copy the token and add it to Netlify environment variables

4. **Access Admin Panel**:
   - Go to `https://your-site.netlify.app/admin/`
   - Sign up/Login with Netlify Identity
   - Start managing content!

### Admin Panel Features

- **📝 Tugas & Assignment**: Manage individual and group tasks
- **👥 Kelompok Mata Kuliah**: Manage course groups
- **Editorial Workflow**: Draft, review, and publish content
- **Media Management**: Upload and manage images/files

## 📁 Project Structure

```
/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   └── lib/           # Utilities
├── public/
│   └── admin/         # Netlify CMS admin interface
├── content/
│   ├── tasks/         # Task content files
│   └── groups/        # Group content files
└── dist/              # Built files (generated)
```

## 🌐 Deployment

The site is automatically deployed to Netlify when changes are pushed to the master branch.

## 📞 Support

For issues with the admin panel:
1. Check that Netlify Identity is enabled
2. Verify GitHub token is set in environment variables
3. Ensure config.yml is properly formatted
4. Check browser console for JavaScript errors
