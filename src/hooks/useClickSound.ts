// Lazy-initialized: audio is created only after the first user click
let audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio("/sound/s1.mp3");
    audio.preload = "none"; // don't preload until needed
    audio.volume = 0.5;
  }
  return audio;
}

export function playClickSound() {
  const a = getAudio();
  if (!a) return;
  a.currentTime = 0;
  a.play().catch(() => {});
}

export function useGlobalClickSound() {
  if (typeof window === "undefined") return;

  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[role='button']")
    ) {
      playClickSound();
    }
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}
