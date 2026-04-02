# Video Intro Screen Implementation Guide

## Overview
I've created an enhanced `VideoIntroScreen` component that mirrors the design from the reference website (https://aitmvencer2k26.netlify.app/). It features:

- **Video Support**: Optional background video playback with particle effects
- **Interactive Button**: "ENTER EXPERIENCE" button that appears after video ends
- **Particle Animation**: Ambient particle effects for visual depth
- **Animated Rings**: Fallback expanding ring animations if no video is provided
- **Smooth Transitions**: Framer Motion-powered animations with glow effects
- **Responsive Design**: Works on mobile and desktop

## Files Created/Modified

### New Component:
- **`src/components/VideoIntroScreen.tsx`** - Enhanced splash screen with video support

### Modified:
- **`src/App.tsx`** - Integrated new component with toggle option

## How to Use

### Option 1: With Video (Recommended)

1. **Add your intro video** to the public folder:
   ```
   public/
   └── videos/
       └── vencer-intro.mp4 (or .webm for better compression)
   ```

2. **Update App.tsx** to use the video:
   ```typescript
   <VideoIntroScreen 
     videoSource="/videos/vencer-intro.mp4"
     onComplete={() => setLoaded(true)}
     duration={5000}
   />
   ```

3. **Enable video intro** in App.tsx:
   ```typescript
   const [useVideoIntro, setUseVideoIntro] = useState(true); // Changed from false
   ```

### Option 2: Without Video (Fallback Animation)

Just set `videoSource={undefined}` or omit it:
```typescript
<VideoIntroScreen 
  onComplete={() => setLoaded(true)}
/>
```

This will show the animated rings and particle effects.

### Option 3: Keep Original Loading Screen

The original `LoadingScreen` is still available and active by default. To switch back:
```typescript
const [useVideoIntro, setUseVideoIntro] = useState(false); // Current default
```

## Video Recommendations

For the intro video, follow these guidelines:

### Technical Specs:
- **Format**: MP4 (H.264) or WebM (VP9)
- **Duration**: 3-5 seconds (optimal user experience)
- **Resolution**: 1920x1080 (will scale responsively)
- **File Size**: < 5MB (MP4) or < 3MB (WebM) for fast loading
- **Frame Rate**: 30 or 60 FPS

### Compression Tips:
```bash
# Using FFmpeg to optimize MP4
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 \
  -c:a aac -b:a 128k output.mp4

# Using FFmpeg for WebM (even better compression)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1M \
  -c:a libopus -b:a 128k output.webm
```

## Component Props

```typescript
interface VideoIntroScreenProps {
  videoSource?: string;  // URL/path to intro video
  onComplete: () => void; // Called when user clicks "ENTER EXPERIENCE"
  duration?: number;      // Fallback animation duration in ms (default: 5000)
}
```

## Customization

### Change Button Text:
In `VideoIntroScreen.tsx`, find the button and change:
```typescript
<motion.button>
  ENTER THE FEST  {/* Change this */}
</motion.button>
```

### Adjust Colors:
Modify the HSL values in styles (cyan/teal theme by default):
```typescript
// Currently: hsl(175 80% 45%) - Teal
// Change to your brand color
style={{
  background: "linear-gradient(135deg, hsl(YOUR_COLOR), hsl(YOUR_COLOR_2))",
  boxShadow: "0 0 30px hsl(YOUR_COLOR / 0.5), ...",
}}
```

### Adjust Animation Duration:
```typescript
<motion.button
  transition={{ duration: 0.5 }} // Change from 0.3
>
  ENTER EXPERIENCE
</motion.button>
```

## Features

✅ Auto-plays video on page load  
✅ Shows "ENTER EXPERIENCE" button after video ends  
✅ Particle background effects  
✅ Smooth fade transitions  
✅ Responsive design (mobile & desktop)  
✅ Fallback animations if no video  
✅ Glow effects with drop-shadow  
✅ Backdrop blur when button appears  

## Browser Support

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers (iOS Safari 12+, Chrome Mobile)

## Performance Notes

- Particle animation uses RequestAnimationFrame for 60fps
- Canvas rendering is lightweight (~30 particles)
- Video uses native HTML5 video element (hardware accelerated)
- Framer Motion handles GPU-accelerated transforms

## To Switch Back to Original Loading Screen

In `App.tsx`, just set:
```typescript
const [useVideoIntro, setUseVideoIntro] = useState(false);
```

The original `LoadingScreen` component will be used instead.

## Next Steps

1. **Add a video file** to `public/videos/vencer-intro.mp4`
2. **Get the video source** from a designer or create one with tools like:
   - Adobe Premiere Pro
   - DaVinci Resolve (free)
   - After Effects
   - Online tools: Kapwing, Pixiko
3. **Update the videoSource** in `App.tsx`
4. **Test** on different devices and browsers
5. **Optimize** the video size for faster loading

---

For any customizations or issues, refer to the component code or Framer Motion docs: https://www.framer.com/motion/
