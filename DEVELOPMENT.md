# Development Guide

## Quick Start for Contributors

### Prerequisites

- Ruby 3.1+
- Node.js 18+
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/dimitarpeevzautre/trips.thestable.bg.git
cd trips.thestable.bg

# Install dependencies
npm install

# Build CSS
npm run build-css-prod

# Start development (if using Jekyll locally)
bundle exec jekyll serve
```

### Development Commands

```bash
# CSS Development
npm run dev              # Watch for CSS changes
npm run build           # Build CSS for production

# Code Quality
npm run format          # Format all files
npm run format:check    # Check formatting
npm run lint            # Run linting checks
npm run pre-commit      # Run pre-commit checks
```

## File Structure

### Content Files

- `_trips/*.md` - Trip content with front matter
- `pages/*.md` - Static pages
- `index.html` - Homepage

### Templates

- `_layouts/` - Page layouts
- `_includes/` - Reusable components

### Assets

- `assets/images/` - All images
- `assets/css/` - Generated CSS (do not edit directly)
- `assets/js/` - JavaScript files

### Configuration

- `_config.yml` - Jekyll configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `src/input.css` - Tailwind CSS source

## Common Tasks

### Adding a New Trip

1. Create file in `_trips/` folder
2. Use existing trip as template
3. Include all required front matter fields
4. Add featured image to `assets/images/trips/`
5. Test locally

### Updating Styles

1. Edit `src/input.css` for custom styles
2. Use Tailwind utility classes in HTML
3. Run `npm run build-css` to compile
4. Test changes in browser

### Modifying Layouts

1. Edit files in `_layouts/` or `_includes/`
2. Use Liquid templating syntax
3. Test with different content types
4. Ensure responsive design works

## Best Practices

### Code Quality

- Run `npm run format` before committing
- Use semantic HTML elements
- Follow existing naming conventions
- Test on multiple screen sizes

### Performance

- Optimize images before adding
- Use WebP format when possible
- Keep CSS bundle size minimal
- Test page load speeds

### SEO

- Include proper meta descriptions
- Use descriptive alt text for images
- Follow heading hierarchy (h1, h2, h3)
- Add structured data when relevant

## Troubleshooting

### CSS Not Updating

- Check `src/input.css` for syntax errors
- Run `npm run build-css` manually
- Clear browser cache
- Ensure file permissions are correct

### Jekyll Build Errors

- Check YAML front matter syntax
- Verify all required fields are present
- Check for special characters in content
- Review Jekyll error messages carefully

### Local Development Issues

- Ensure Ruby and Node.js versions match requirements
- Clear Jekyll cache: `bundle exec jekyll clean`
- Restart development server
- Check file permissions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run pre-commit` to ensure code quality
5. Submit a pull request

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
