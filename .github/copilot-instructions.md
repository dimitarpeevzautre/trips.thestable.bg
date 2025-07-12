# Copilot Instructions for trips.thestable.bg

## Project Overview

This is a Jekyll static site for "The Stable" - a Bulgarian travel company
offering guided camper adventures. The site showcases 6 signature journeys
across Bulgaria's diverse landscapes and cultural heritage.

## Tech Stack

- **Jekyll**: Static site generator with Liquid templating
- **Tailwind CSS**: Utility-first CSS framework for styling
- **GitHub Pages**: Hosting and deployment platform
- **GitHub Actions**: CI/CD for automated builds and deployments

## Project Structure

```
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates (default.html, page.html, trip.html)
├── _includes/               # Reusable components (header.html, footer.html)
├── _trips/                  # Trip content collection (Markdown files)
├── pages/                   # Static pages (about.md, contact.md)
├── assets/                  # Static assets (CSS, JS, images)
├── src/                     # Tailwind CSS source files
└── .github/workflows/       # GitHub Actions workflows
```

## Coding Standards

### HTML/Liquid Templates

- Use semantic HTML5 elements
- Follow Jekyll/Liquid naming conventions
- Include proper YAML front matter in all content files
- Use descriptive file names and organize logically

### CSS (Tailwind)

- Prefer Tailwind utility classes over custom CSS
- Use consistent spacing scale (space-4, space-6, space-8, etc.)
- Follow mobile-first responsive design principles
- Use semantic color names from the Tailwind config

### JavaScript

- Use modern ES6+ syntax
- Keep JavaScript minimal and focused
- Prefer vanilla JavaScript over external libraries when possible
- Use camelCase for variables and functions

### Content (Markdown)

- Use consistent front matter structure for trips
- Include all required fields: title, subtitle, featured_image, price, duration,
  etc.
- Write clear, engaging copy that reflects the adventure tourism focus
- Use proper markdown formatting and headers

## File Naming Conventions

- Use kebab-case for file names: `black-sea-coast.md`
- Use descriptive names that reflect content: `rila-pirin-adventure.md`
- Image files should be organized by category: `assets/images/trips/`
- Use lowercase for all file names and extensions

## Development Workflow

1. **CSS Changes**: Run `npm run build-css` for development or
   `npm run build-css-prod` for production
2. **Content Changes**: Jekyll auto-rebuilds when content files change
3. **Local Testing**: Use `bundle exec jekyll serve` for local development
4. **Deployment**: Automatic via GitHub Actions on push to main branch

## Common Patterns

### Trip Pages

- All trips should have consistent front matter structure
- Use the `trip.html` layout
- Include featured images, pricing, duration, and detailed descriptions
- Add proper SEO metadata

### Responsive Design

- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Test on mobile, tablet, and desktop breakpoints
- Ensure images are optimized and responsive

### SEO Best Practices

- Use proper heading hierarchy (h1, h2, h3)
- Include alt text for all images
- Add meta descriptions to all pages
- Use descriptive URLs and file names

## Dependencies

- **Required**: Ruby 3.1+, Node.js 18+, Bundler gem
- **Build Tools**: Tailwind CSS, Jekyll, Jekyll plugins (feed, sitemap, SEO tag)
- **Development**: No additional dev dependencies beyond Tailwind

## Deployment

- **Production**: Automatic deployment via GitHub Actions to GitHub Pages
- **Staging**: Manual deployment via `bundle exec jekyll build`
- **Environment**: Set `JEKYLL_ENV=production` for production builds

## Content Guidelines

- Focus on outdoor adventure and cultural experiences in Bulgaria
- Use engaging, descriptive language for trip descriptions
- Include practical information: prices, duration, difficulty level
- Highlight unique aspects of each journey
- Maintain consistent tone and brand voice

## Performance Considerations

- Optimize images for web (use WebP when possible)
- Minify CSS and JavaScript in production
- Use Jekyll's built-in optimization features
- Keep page load times under 3 seconds

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first approach
- Progressive enhancement for older browsers
- Test across different devices and screen sizes

## When Making Changes

1. Always test locally before committing
2. Follow existing code patterns and structure
3. Update documentation if adding new features
4. Consider SEO impact of changes
5. Test responsive design on multiple breakpoints
6. Ensure accessibility standards are maintained
