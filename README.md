# Manajemen Tugas MercuBuana

Portal terpadu untuk mahasiswa Manajemen semester 1 dalam mengelola tugas individu dan kelompok.

## 🚀 Quick Start

### Development
```bash
npm run dev
```

### Build with Content Generation
```bash
npm run cms:build
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
│   ├── admin/              # Netlify CMS admin interface
│   └── content/            # Generated JSON files
├── src/                    # React components
├── tools/                  # Build tools
└── package.json
```

## 🛠️ Content Management System (CMS)

### Admin Access
- URL: `/admin/`
- Username: Your Git provider account
- Password: Your Git provider password

### Content Types

#### Tasks
- Individual or Group assignments
- Rich metadata (deadline, lecturer, room, etc.)
- File attachments and references
- Status tracking

#### Groups
- Study groups per course
- Member management
- Drive and WhatsApp links
- Progress tracking

#### Pages
- Static pages with rich content
- Hero sections and statistics
- SEO optimization

### Adding New Content

1. **Via Admin Panel**:
   - Go to `/admin/`
   - Login with Git credentials
   - Create new post in desired collection

2. **Via Files**:
   - Add markdown file to `content/[collection]/`
   - Run `npm run update-content`
   - Commit and push changes

### Markdown Format

```yaml
---
title: "Your Title"
subject: "Course Name"
date: "2024-01-15"
deadline: "2024-01-22"
lecturer: "Dr. Name"
type: "Individual"
status: "Open"
priority: "High"
---

# Your Content Here

Write your content in markdown format.
```

## 🔧 Build Process

### Content Generation
The build process automatically:
1. Reads markdown files from `content/` folders
2. Parses frontmatter and content
3. Generates JSON files in `public/content/`
4. Builds the React application

### Deployment
- **Netlify**: Auto-deploy on content changes
- **Vercel**: Manual deploy with `npm run cms:build`
- **GitHub Pages**: Use GitHub Actions

## 📱 Features

- ✅ Responsive design
- ✅ Dark/Light theme support
- ✅ Real-time content updates
- ✅ SEO optimization
- ✅ Progressive Web App
- ✅ Offline support
- ✅ Admin panel for content management

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test with `npm run cms:dev`
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@manajemantugas.com
- Issues: GitHub Issues
- Discussions: GitHub Discussions
