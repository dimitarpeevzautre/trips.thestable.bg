# How to Replace with Official Logo

## Quick Steps

1. **Get the official logo** from the main site (thestable.bg)
2. **Replace the placeholder** by overwriting these files:
   - `/assets/images/logo/logo.svg` - Main logo
   - `/assets/images/logo/favicon.svg` - Favicon
3. **Test the result** by viewing the site

## Detailed Instructions

### Step 1: Obtain Official Logo

- Contact the main site administrator for the official logo files
- Logo should be in SVG format (recommended) or high-quality PNG
- Ensure you have both a main logo and favicon version

### Step 2: Replace Files

Replace these files in the repository:

```bash
# Main logo (used in header and footer)
/assets/images/logo/logo.svg

# Favicon (used in browser tab)
/assets/images/logo/favicon.svg
```

### Step 3: Logo Specifications

- **Main Logo**: Recommended size 180x40px (or similar aspect ratio)
- **Favicon**: 32x32px or 16x16px
- **Format**: SVG preferred, PNG as fallback
- **Colors**: Should work on light backgrounds (header/footer are light)

### Step 4: Test

After replacing the files:

1. Build the CSS: `npm run build-css-prod`
2. Start Jekyll: `bundle exec jekyll serve` (if available)
3. Check the logo appears in:
   - Header (top navigation)
   - Footer (company info section)
   - Browser tab (favicon)

## Current Implementation

The logo system is already fully implemented:

- ✅ Configurable via `_config.yml`
- ✅ Smart fallback system
- ✅ Responsive design
- ✅ Used in header and footer
- ✅ Favicon support
- ✅ Proper error handling

## Configuration

The logo path is set in `_config.yml`:

```yaml
logo: 'assets/images/logo/logo.svg'
```

**Note**: The path uses a relative format (without leading `/`) to work with
different baseurl configurations:

- With baseurl:
  `https://yourusername.github.io/trips.thestable.bg/assets/images/logo/logo.svg`
- Without baseurl: `http://localhost:4000/assets/images/logo/logo.svg`

You can change this path if needed, but the current structure is recommended.

## Fallback Behavior

If the logo fails to load:

- Header: Shows van emoji (🚐) in colored box
- Footer: Shows mountain emoji (🏔️) in colored box
- Site continues to work normally

## Need Help?

If you encounter issues:

1. Check file paths are correct
2. Verify logo files are valid SVG/PNG
3. Ensure proper file permissions
4. Test logo on different screen sizes
