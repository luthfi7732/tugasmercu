# Manajemen Tugas MercuBuana

Portal terpadu untuk mahasiswa Manajemen semester 1 dalam mengelola tugas individu dan kelompok.

## 🚀 Quick Start

### Development
```bash
npm run dev
```

### Build with Content Generation
```bash
npm run build
```

### Update Content Only
```bash
npm run update-content
```

## 📁 Project Structure

```
├── content/                 # Markdown content files
│   ├── tasks/              # Task content
│   ├── groups/             # Group content
│   └── pages/              # Page content
├── public/
│   ├── admin/              # Admin interface
│   └── content/            # Generated JSON files
├── src/                    # React components
├── tools/                  # Build tools
└── package.json
```

## 🛠️ Content Management System (CMS)

### Admin Access
- **Forestry.io**: `https://mercutugas.forestry.io` (Recommended)
- **Direct URL**: `/admin/`
- **Authentication**: GitHub credentials

### Content Types

#### Tasks
- Individual or Group assignments
- Rich metadata (deadline, lecturer, room, etc.)
- File attachments and references
- Status tracking

#### Groups
- Study groups per course
- Course information (lecturer, room, links)
- Drive and WhatsApp group links

#### Pages
- Static pages with rich content
- Hero sections and statistics
- SEO optimization

### Adding New Content

1. **Via Forestry.io (Recommended)**:
   - Go to `https://mercutugas.forestry.io`
   - Login with GitHub
   - Create/edit content with visual editor

2. **Via Admin Panel**:
   - Go to `/admin/`
   - Login with Git credentials
   - Create new post in desired collection

3. **Via Files**:
   - Add markdown file to `content/[collection]/`
   - Run `npm run update-content`
   - Commit and push changes

### Markdown Format

```yaml
---
title: "Your Title"
course: "Course Name"
lecturer: "Dr. Name"
room: "Room Number"
drive_link: "https://drive.google.com/..."
whatsapp_link: "https://chat.whatsapp.com/..."
---

# Your Content Here

Write your content in markdown format.
```

## 🚀 Deployment

### Option 1: Vercel (Recommended) ⭐
- **URL**: `https://mercutugas.vercel.app`
- **CMS**: Forestry.io (Free)
- **Setup**: Auto-deploy from GitHub
- **Cost**: 100% Free

### Option 2: GitHub Pages
- **URL**: `https://luthfiiiiiiau.github.io/mercutugas/`
- **CMS**: Simple admin interface
- **Setup**: GitHub Actions
- **Cost**: 100% Free

### Option 3: Netlify
- **URL**: `https://mercutugas.netlify.app`
- **CMS**: Netlify CMS
- **Setup**: Auto-deploy from GitHub
- **Cost**: Free tier available

## 🔧 Build Process

### Content Generation
The build process automatically:
1. Reads markdown files from `content/` folders
2. Parses frontmatter and content
3. Generates JSON files in `public/content/`
4. Builds the React application

### Auto-Deploy
- **Vercel**: Auto-deploy on push to main
- **Netlify**: Auto-deploy on push to main
- **GitHub Pages**: Manual trigger via Actions

## 📱 Features

- ✅ Responsive design
- ✅ Modern UI/UX
- ✅ Content Management System
- ✅ SEO optimization
- ✅ Fast loading
- ✅ Mobile friendly
- ✅ Admin panel for content management

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test with `npm run dev`
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

For support and questions:
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: support@manajemantugas.com

## 📚 Documentation

- [Setup Guide](PANDUAN-MIGRASI-KE-VERCEL.md) - Migration to Vercel
- [CMS Setup](PANDUAN-SETTING-NETLIFY-GITHUB.md) - CMS Configuration
- [Quick Fix](QUICK-CHECKLIST.md) - Troubleshooting
