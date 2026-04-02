/**
 * Quick switcher for intro screen modes
 * 
 * Usage in App.tsx:
 * 1. Import: import { INTRO_MODE } from "@/config/introConfig";
 * 2. Use: const [useVideoIntro, setUseVideoIntro] = useState(INTRO_MODE === 'video');
 * 
 * Environment variable option:
 * Add to .env: VITE_INTRO_MODE=video|loading (default: loading)
 */

export type IntroMode = 'video' | 'loading';

const DEFAULT_MODE: IntroMode = 'loading';

export const INTRO_MODE: IntroMode = (
  import.meta.env.VITE_INTRO_MODE as IntroMode
) || DEFAULT_MODE;

export const VIDEO_CONFIG = {
  // Path to intro video (relative to public folder)
  source: '/videos/vencer-intro.mp4',
  
  // Recommended settings
  duration: 5000, // milliseconds
  
  // Fallback animation (used if video not provided)
  fallbackDuration: 5000,
  
  // Button appearance delay after video ends
  buttonDelay: 500,
};

export const LOADING_SCREEN_CONFIG = {
  // Original loading screen duration
  duration: 2400,
  
  progressDuration: 2400,
};

/**
 * How to use different intro modes:
 * 
 * MODE 1: Original Loading Screen (Default)
 * <LoadingScreen onComplete={() => setLoaded(true)} />
 * 
 * MODE 2: Video Intro with Fallback Animation
 * <VideoIntroScreen 
 *   videoSource={VIDEO_CONFIG.source}
 *   onComplete={() => setLoaded(true)}
 *   duration={VIDEO_CONFIG.fallbackDuration}
 * />
 * 
 * MODE 3: Video Intro Only
 * <VideoIntroScreen 
 *   videoSource="/path/to/your/video.mp4"
 *   onComplete={() => setLoaded(true)}
 * />
 */
