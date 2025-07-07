# Image Directory

This directory is for storing images used on the website.

## Directory Structure

- `/assets/images/trips/` - Trip featured images and galleries
- `/assets/images/` - General site images (logos, backgrounds, etc.)

## Image Guidelines

### File Naming
- Use descriptive, lowercase names with hyphens
- Example: `rila-mountain-summit.jpg`

### Recommended Sizes
- **Featured trip images**: 800x600px (4:3 aspect ratio)
- **Trip gallery images**: 1200x800px
- **Hero images**: 1920x1080px

### Formats
- **JPEG** for photographs
- **PNG** for graphics with transparency
- **WebP** for modern browsers (optional)

### Optimization
- Compress images to reduce file size
- Consider using tools like TinyPNG or ImageOptim
- Aim for under 500KB per image

## Adding Images

1. Upload images to the appropriate subdirectory
2. Reference them in markdown: `![Alt text](/assets/images/filename.jpg)`
3. For trip featured images, use the `featured_image` front matter field
