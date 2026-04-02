#!/usr/bin/env node
/**
 * Setup script to copy the intro video to public/videos/
 * Run this from your workspace terminal: node setup-video.js
 */

const fs = require('fs');
const path = require('path');

const sourceFile = 'D:\\gta\\intro.mp4';
const destDir = path.join(__dirname, 'public', 'videos');
const destFile = path.join(destDir, 'intro.mp4');

console.log('🎬 Video Setup Script');
console.log('=====================\n');
console.log(`Source: ${sourceFile}`);
console.log(`Destination: ${destFile}\n`);

// Create directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`✅ Created directory: ${destDir}`);
}

// Copy the file
try {
  fs.copyFileSync(sourceFile, destFile);
  console.log(`✅ Successfully copied video file!`);
  console.log(`📁 File size: ${(fs.statSync(destFile).size / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`\n🚀 Your video is ready to use!`);
} catch (error) {
  console.error(`❌ Error copying file:`, error.message);
  process.exit(1);
}
