#!/usr/bin/env node
/**
 * Simple HTTP Server for testing video locally
 * Run: node serve-videos.js
 * Then open: http://localhost:3001/videos/intro.mp4
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const PORT = 3001;
const VIDEOS_DIR = path.join(__dirname, 'public', 'videos');

// Create videos directory if it doesn't exist
if (!fs.existsSync(VIDEOS_DIR)) {
  fs.mkdirSync(VIDEOS_DIR, { recursive: true });
  console.log(`Created directory: ${VIDEOS_DIR}`);
}

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Remove leading slash and resolve path
  const filePath = path.join(VIDEOS_DIR, req.url.slice(1));
  
  // Security: prevent directory traversal
  if (!filePath.startsWith(VIDEOS_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    res.writeHead(404);
    res.end('File not found');
    return;
  }

  // Get file stats
  const stat = fs.statSync(filePath);
  const mimeType = mime.lookup(filePath) || 'application/octet-stream';

  // Handle range requests for video streaming
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': mimeType,
    });

    fs.createReadStream(filePath, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': mimeType,
      'Accept-Ranges': 'bytes',
    });

    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`
🎬 Video Server Started
========================
URL: http://localhost:${PORT}
Videos Path: ${VIDEOS_DIR}

Place your video files in: ${VIDEOS_DIR}
Then access them at: http://localhost:${PORT}/videos/filename.mp4

Example: http://localhost:${PORT}/videos/intro.mp4
`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
