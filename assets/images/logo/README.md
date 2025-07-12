# Logo Assets

This directory contains the logo assets for The Stable website.

## Files

- `logo.svg` - Main logo used in the header (180x40px recommended)
- `favicon.svg` - Favicon used in browser tabs (32x32px)

## Usage

The logo is configured in `_config.yml` with the `logo` setting:

```yaml
logo: "/assets/images/logo/logo.svg"
```

## Updating the Logo

To update the logo with the official logo from the main site (thestable.bg):

1. Replace `logo.svg` with the official logo
2. Replace `favicon.svg` with a favicon version of the logo
3. Ensure the logo works well on both light and dark backgrounds
4. Test the logo at different sizes

## Logo Requirements

- **Format**: SVG preferred (scales well), PNG/JPG as fallback
- **Size**: Header logo should be roughly 180x40px or similar aspect ratio
- **Background**: Should work on light backgrounds (header has white/light background)
- **Fallback**: The system will fallback to a van emoji icon if the logo fails to load

## Current Logo

The current logo is a placeholder created specifically for this trips site. It should be replaced with the official logo from thestable.bg when available.