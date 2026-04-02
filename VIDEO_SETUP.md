## Video Setup Guide - GTA Intro Video

### New Features ✨

Your video player now has **full manual control**:

✅ **NO Auto-Skip** - Video won't automatically advance
✅ **Play/Pause Button** - Control playback
✅ **Auto-Skip Toggle** - Optional toggle to enable/disable auto-skip
✅ **Continue Button** - Manual button to proceed to main site
✅ **Sound Controls** - Mute/Unmute with visual indicators
✅ **Skip Button** - Appears after 5 seconds (optional skip)
✅ **Time Display** - Shows current/total duration
✅ **Video Controls** - Full control over your video

---

### Flow Setup ✅
Your site now has this flow:
1. **Intro splash screen** (VENCER 2K26 logo + rings animation)
2. Click **"ENTER EXPERIENCE"** 
3. **Your GTA Intro video plays** with full controls:
   - 🔊 **Sound** enabled by default
   - 🎮 **Play/Pause** button (bottom-left)
   - 🔇 **Mute/Unmute** button (top-left) 
   - ⏱️ **Auto-Skip Toggle** (top-center) - Enable for video to auto-advance
   - ⏭️ **Skip Button** (top-right, appears after 5s)
   - ▶️ **Continue Button** (bottom-right) - Manual proceed to main site
   - ⏱️ **Time Counter** (bottom-left) - Shows 120s / 240s format

---

### Installation - Choose One Method

#### ⚡ Method 1: Quick Test (Fastest)
[Currently requires video file in project]

1. **From VS Code terminal in your workspace**, run:
   ```bash
   node copy-video.js
   ```
   Or on Windows PowerShell:
   ```powershell
   .\copy-video.bat
   ```

2. **Video should now play** at `/videos/intro.mp4`

---

#### ✅ Method 2: Manual Copy (Recommended)
[Most reliable]

1. **Create folder**:
   ```bash
   mkdir -p public/videos
   ```

2. **Copy your video**:
   - On Windows: `copy D:\gta\intro.mp4 public\videos\intro.mp4`
   - On Mac/Linux: `cp ~/Videos/intro.mp4 public/videos/intro.mp4`

3. **Video path is already set** to `/videos/intro.mp4` in `src/App.tsx`

4. **Reload your site** - video should play!

---

#### 🚀 Method 3: Dev Server with Video Streaming
[Best for large files]

1. **Create `public/videos` folder** with your video

2. **In one terminal**, run the video server:
   ```bash
   node serve-videos.js
   ```
   This starts a local HTTP server on port 3001

3. **In another terminal**, run your dev server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **App will use** `/videos/intro.mp4`

---

### Video Optimization (Optional)

**If video is slow to load**, optimize it:

```bash
# MP4 (good compression, wide support)
ffmpeg -i D:\gta\intro.mp4 -c:v libx264 -preset medium -crf 28 \
  -c:a aac -b:a 128k public/videos/intro.mp4

# WebM (better compression)
ffmpeg -i D:\gta\intro.mp4 -c:v libvpx-vp9 -b:v 1M \
  -c:a libopus -b:a 128k public/videos/intro.webm
```

---

## Complete Feature List

### Controls
- ▶️ **Play/Pause** - Pause video anytime
- 🔇 **Mute Toggle** - Top-left: mute/unmute with icons
- ⏱️ **Auto-Skip Toggle** - Top-center: enable auto-skip on video end
- ⏭️ **Skip Button** - Top-right: manual skip (appears after 5s)
- ▶️ **Continue Button** - Bottom-right: proceed to main site
- ⏱️ **Time Counter** - Shows: `120s / 240s`

### Visual Feedback
- 🎆 Loading spinner while video loads
- 🟢 Glowing cyan icons when enabled
- 🟠 Orange icons when muted
- Smooth animations on all buttons
- Responsive design (mobile-friendly)

### States
- Video plays with **sound enabled by default**
- **No auto-skip** by default (user controls)
- **Optional auto-skip** via toggle button
- **Manual exit** always available
- **Skip after 5s** option available

---

## Testing Checklist

```
☐ 1. Video file copied to public/videos/intro.mp4
☐ 2. Visit site and see intro splash screen
☐ 3. Click "ENTER EXPERIENCE"
☐ 4. Video plays with sound
☐ 5. Click mute button (top-left) - sound should mute
☐ 6. Click mute again - sound returns
☐ 7. Click play/pause (bottom-left) - video pauses
☐ 8. Click play/pause again - video resumes
☐ 9. Wait 5 seconds - skip button appears (top-right)
☐ 10. Toggle auto-skip (top-center) - indicator highlights
☐ 11. Let video finish OR click Continue (bottom-right)
☐ 12. Main site loads successfully
```

---

## Troubleshooting

**"Video not found / blank screen"**
- Check `public/videos/intro.mp4` exists
- Run: `ls -la public/videos/` (or `dir public\videos` on Windows)
- Try Method 2 (manual copy)

**"No sound"**
- Check system volume
- Try mute/unmute toggle
- Test video file directly: `ffplay public/videos/intro.mp4`

**"Video stutters/slow"**
- See Video Optimization section above
- Try Method 3 (video streaming server)

**"Still not working?"**
- Check browser console: `F12` → Console tab
- Look for error messages
- Try different browser
- Ensure video format is compatible (MP4 recommended)

---

## File Locations

```
src/
├── components/
│   ├── VideoIntroScreen.tsx      (splash screen)
│   ├── VideoPlayerScreen.tsx     (video player) ← NEW
│   └── ...
├── App.tsx                        (flow control)
└── ...

public/
├── videos/                        (create this folder)
│   └── intro.mp4                 (copy your video here)
└── ...

copy-video.bat                     (Windows copy script)
serve-videos.js                    (video server)
VIDEO_SETUP.md                     (this file)
```

---

## Component Props

```typescript
// src/App.tsx - Configuration
<VideoPlayerScreen
  videoSource="/videos/intro.mp4"  // Path to your video
  onComplete={handleVideoComplete}  // Called when user exits
/>
```

---

Enjoy your video! 🎬🎮✨
