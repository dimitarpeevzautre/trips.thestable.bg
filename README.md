# The Stable - Guided Camper Adventures in Bulgaria

A Jekyll static site showcasing guided camper journeys across Bulgaria's diverse
landscapes and cultural heritage.

## 🚀 Features

- **6 Signature Journeys**: Carefully curated camper adventures for 2026
- **Modern Design**: Built with Tailwind CSS for a beautiful, responsive
  experience
- **Camper Focus**: Specialized for guided camper travel experiences
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Built-in SEO with Jekyll SEO tag
- **Mobile Responsive**: Works perfectly on all devices
- **Photography Tours**: Specialized layouts for different trip types
- **Contact Forms**: Ready-to-use contact forms
- **Social Integration**: Social media ready

## 🤖 AI-Enhanced Development

This project includes comprehensive GitHub Copilot integration for enhanced
development experience:

### Copilot Configuration

- **Custom Instructions**: See `.github/copilot-instructions.md` for detailed
  project context
- **Workspace Config**: VS Code settings optimized for Jekyll + Tailwind
  development
- **Code Quality**: Automated formatting with Prettier and EditorConfig
- **Development Scripts**: Enhanced npm scripts for streamlined workflow

### AI-Friendly Features

- Detailed project documentation and coding standards
- Consistent code formatting and structure
- Pre-commit hooks for quality assurance
- VS Code extensions recommendations for optimal development experience

### Getting Started with AI Assistance

1. Install recommended VS Code extensions
2. Review `.github/copilot-instructions.md` for project context
3. Use `npm run format` to maintain code consistency
4. Leverage pre-commit hooks for quality checks

## 🛠️ Tech Stack

- **Jekyll** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - Automated deployment

## 📁 Project Structure

```
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page layouts
│   ├── default.html
│   ├── page.html
│   └── trip.html
├── _includes/               # Reusable components
│   ├── header.html
│   └── footer.html
├── _trips/                  # Trip content
├── pages/                   # Static pages
├── assets/                  # Static assets
│   ├── css/
│   └── js/
├── src/                     # Tailwind source
└── .github/workflows/       # GitHub Actions
```

## 🚀 Quick Start

### Prerequisites

- Ruby 3.1+
- Node.js 18+
- Bundler gem

### Local Development

**For quick setup, run the automated setup script:**

```bash
./setup.sh
```

**Or follow these manual steps:**

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd trips.thestable.bg
   ```

2. **Install Node.js dependencies**

   ```bash
   npm install
   ```

3. **Install Ruby dependencies**

   ```bash
   bundle install
   ```

4. **Build CSS with Tailwind**

   ```bash
   npm run build-css
   ```

5. **Start Jekyll development server**

   ```bash
   bundle exec jekyll serve
   ```

6. **Open in browser**
   ```
   http://localhost:4000
   ```

### Development Workflow

1. **CSS Development**: Run `npm run dev` to watch for changes and rebuild CSS
2. **Code Formatting**: Run `npm run format` to format all code
3. **Quality Checks**: Run `npm run pre-commit` before committing
4. **Production Build**: Run `npm run build` for minified CSS
5. **Content Changes**: Jekyll will automatically rebuild when you change
   content files
6. **Production Build**: Run `npm run build-css-prod` for minified CSS

## 📝 Adding Content

### Adding a New Trip

Create a new file in `_trips/` folder:

```markdown
---
title: 'Your Trip Title'
subtitle: 'Brief description'
featured: true
featured_image: '/assets/images/trips/your-trip.jpg'
price: '150 BGN'
duration: '2 days'
difficulty: 'Moderate'
location: 'Mountain Range, Bulgaria'
dates: 'August 15-16, 2025'
spots_available: 10
includes:
  - 'Professional guide'
  - 'Transportation'
  - 'Accommodation'
excludes:
  - 'Personal equipment'
  - 'Meals'
equipment:
  - 'Hiking boots'
  - 'Backpack'
excerpt: 'Brief trip description for listings'
---

Your trip content in Markdown format...
```

### Adding Images

1. Add images to `assets/images/` folder
2. Reference them in your content: `/assets/images/filename.jpg`
3. For trip featured images, use: `/assets/images/trips/filename.jpg`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color shades
      },
      secondary: {
        // Your secondary color shades
      }
    }
  }
}
```

### Fonts

Update the Google Fonts import in `src/input.css` and the font family in
`tailwind.config.js`.

### Components

Add custom CSS components in `src/input.css` using Tailwind's
`@layer components`:

```css
@layer components {
  .your-component {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
  }
}
```

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - the site will build and deploy automatically

### Manual Deployment

```bash
# Build for production
npm run build-css-prod
bundle exec jekyll build

# Deploy _site folder to your hosting platform
```

## 📊 Analytics & SEO

- **Google Analytics**: Add your tracking ID to `_config.yml`
- **SEO**: Customize meta descriptions and titles in page front matter
- **Sitemap**: Automatically generated at `/sitemap.xml`
- **RSS Feed**: Available at `/feed.xml`

## 🔧 Configuration

### Site Settings

Edit `_config.yml`:

```yaml
title: 'Your Site Title'
description: 'Your site description'
baseurl: '/your-repo-name'
url: 'https://yourusername.github.io'
```

### Navigation

Edit navigation links in `_includes/header.html`.

### Contact Information

Update contact details in:

- `_includes/footer.html`
- `pages/contact.md`

## 🐛 Troubleshooting

### CSS Not Loading

- Make sure you've run `npm run build-css`
- Check that `assets/css/style.css` exists and has content

### Jekyll Build Errors

- Ensure all YAML front matter is properly formatted
- Check that required gems are installed with `bundle install`

### GitHub Pages Issues

- Verify your repository name matches the `baseurl` in `_config.yml`
- Make sure GitHub Actions have permissions to deploy

## 📞 Support

If you need help with this template:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Look at [GitHub Pages documentation](https://docs.github.com/en/pages)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to create amazing trip experiences?** Start customizing your site and
sharing your adventures with the world! 🏔️
