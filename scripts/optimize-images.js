#!/usr/bin/env node

const imagemin = require('imagemin').default;
const imageminWebp = require('imagemin-webp').default;
const imageminMozjpeg = require('imagemin-mozjpeg').default;
const imageminPngquant = require('imagemin-pngquant').default;
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'assets/images';
  const outputDir = 'assets/images/optimized';

  // Check if input directory exists
  if (!fs.existsSync(inputDir)) {
    console.log('📁 No images directory found. Creating placeholder...');
    fs.mkdirSync(inputDir, { recursive: true });
    console.log('✅ Created assets/images directory');
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🔄 Optimizing images...');

  try {
    // Optimize JPEG files
    const jpegFiles = await imagemin([`${inputDir}/**/*.{jpg,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 85 }),
        imageminWebp({ quality: 85 }),
      ],
    });

    // Optimize PNG files
    const pngFiles = await imagemin([`${inputDir}/**/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({ quality: [0.8, 0.9] }),
        imageminWebp({ quality: 85 }),
      ],
    });

    const totalFiles = jpegFiles.length + pngFiles.length;

    if (totalFiles === 0) {
      console.log('📁 No images found to optimize');
      return;
    }

    console.log('✅ Images optimized successfully!');
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    console.log(`📊 ${totalFiles} files processed`);
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  optimizeImages();
}

module.exports = optimizeImages;
